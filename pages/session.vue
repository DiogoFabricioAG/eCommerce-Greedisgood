<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen transition-all duration-500 ease-in-out"
  >
    <h1
      :class="[
        'font-notoSans font-semibold text-5xl transition-all duration-700 ease-in-out absolute',
        { 'translate-y-[-200px] text-2xl': !initPage },
      ]"
    >
      Bienvenido a <strong class="text-orange-500">GreedisGood</strong>
    </h1>
    <p
      :class="[
        'opacity-0 duration-300 translate-y-[-250px] absolute font-ubuntu',
        { 'opacity-100': !initPage },
      ]"
    >
      Escoge lo que necesites
    </p>

    <div
      v-if="!initPage"
      class="mt-20 bg-white p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out opacity-0"
      :class="{
        'opacity-100 translate-y-0': !initPage,
        'w-1/2': !isLogin,
        'w-1/3': isLogin,
      }"
    >
      <div class="flex justify-center mb-4">
        <button
          @click="
            isLogin = true;
            currentPage = 0;
          "
          :class="[
            'px-4 py-2',
            isLogin ? 'text-orange-500 font-bold' : 'text-gray-500',
          ]"
        >
          Login
        </button>
        <span class="mx-2 text-gray-400">|</span>
        <button
          @click="isLogin = false"
          :class="[
            'px-4 py-2',
            !isLogin ? 'text-orange-500 font-bold' : 'text-gray-500',
          ]"
        >
          Register
        </button>
      </div>

      <form
        @submit.prevent="handleFormSubmit"
        :class="['space-y-4 duration-150']"
      >
        <div v-if="isLogin" class="">
          <div>
            <label class="block text-gray-700">Email</label>
            <input
              v-model="loginRequest.email"
              type="email"
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label class="block text-gray-700">Password</label>
            <input
              v-model="loginRequest.password"
              type="password"
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div v-else class="relative w-full">
          <div
            :class="[
              'duration-500 transition-all ease-in-out absolute w-full',
              currentPage === 0
                ? 'opacity-100 relative'
                : 'opacity-0 h-0 overflow-hidden',
            ]"
          >
            <div>
              <label class="block text-gray-700">Email</label>
              <input
                v-model="accountRequest.email"
                type="email"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Password</label>
              <input
                v-model="accountRequest.password"
                type="password"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Repeat Password</label>
              <input
                v-model="passwordRepeat"
                type="password"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div
            :class="[
              'duration-500 transition-all ease-in-out absolute w-full',
              currentPage === 1
                ? 'opacity-100 relative'
                : 'opacity-0 h-0 overflow-hidden',
            ]"
          >
            <div>
              <label class="block text-gray-700">First Name</label>
              <input
                v-model="accountRequest.firstname"
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Last Name</label>
              <input
                v-model="accountRequest.lastname"
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Number</label>
              <input
                v-model="accountRequest.number"
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div
            :class="[
              'duration-500 transition-all ease-in-out absolute w-full',
              currentPage === 2
                ? 'opacity-100 relative'
                : 'opacity-0 h-0 overflow-hidden',
            ]"
          >
            <div>
              <label class="block text-gray-700">Location</label>
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Client or Sell</label>
              <input
                type="tel"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Preferences</label>
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <button
          v-if="isLogin"
          type="submit"
          class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          {{ isLogin ? "Iniciar Sesión" : "Siguiente Pagina" }}
        </button>
        <div class="flex gap-2 w-full" v-else>
          <button
            @click="currentPage--"
            type="button"
            :class="[
              'w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition',
              currentPage === 0 ? 'opacity-0' : 'opacity-100',
            ]"
          >
            Pagina Anterior
          </button>
          <button
            v-if="currentPage !== lastPage"
            @click="currentPage++"
            type="button"
            class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Siguiente Pagina
          </button>
          <button
            v-else
            type="submit"
            class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Registrate
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  createAccount as apiCreateAccount,
  loginAccount as apiLoginAccount,
} from "@/services/apiSessions";
import type {
  AccountType,
  ResponseType,
  LoginType,
  ResponseLoginType,
} from "@/types/myAccount";
const initPage = ref(true);
const isLogin = ref(true);
const lastPage = 2;
const currentPage = ref(0);
const useToast = useMyToastStore();
const route = useRouter();

const accountRequest = ref<AccountType>({
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  number: "",
});

const loginRequest = ref<LoginType>({
  email: "",
  password: "",
});

const passwordRepeat = ref("");

const handleFormSubmit = () => {
  if (isLogin.value) {
    loginAccount({
      email: loginRequest.value.email,
      password: loginRequest.value.password,
    });
  } else {
    createAccount({
      email: accountRequest.value.email,
      password: accountRequest.value.password,
      firstname: accountRequest.value.firstname,
      lastname: accountRequest.value.lastname,
      number: accountRequest.value.number,
    });
  }
};

onMounted(() => {
  setTimeout(() => {
    initPage.value = false;
  }, 1000);
});

const createAccount = async (account: AccountType) => {
  const response: ResponseType = await apiCreateAccount(account);
  if (response.status === 201) {
    useToast.showToast(500, response.message, "check");
    isLogin.value = true;
  } else {
    useToast.showToast(500, response.message, "wrong");
  }
};

const loginAccount = async (request: LoginType | any) => {
  const response: ResponseLoginType = await apiLoginAccount(request);
  if (response.status === 500) {
    useToast.showToast(500, response.response.data.message, "wrong");
  } else {
    console.log(response);
    useToast.showToast(200, "Funciona", "check");
    route.push("/");
  }
};
</script>
