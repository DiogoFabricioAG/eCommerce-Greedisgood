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
              type="email"
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label class="block text-gray-700">Password</label>
            <input
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
                type="email"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Password</label>
              <input
                type="password"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Repeat Password</label>
              <input
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
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Last Name</label>
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label class="block text-gray-700">Number</label>
              <input
                type="tel"
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

const initPage = ref(true);
const isLogin = ref(true);
const lastPage = 2;
const currentPage = ref(0);
const useToast = useMyToastStore();
const route = useRouter();

const handleFormSubmit = () => {
  if (isLogin.value) {
    route.push("/");
  } else {
    useToast.showToast(500, "Registro tuvo problemas", "wrong");
  }
};

onMounted(() => {
  setTimeout(() => {
    initPage.value = false;
  }, 1000);
});
</script>
