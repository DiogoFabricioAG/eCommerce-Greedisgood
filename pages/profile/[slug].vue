<template>
  <section>
    <HeaderComponent />
  </section>
  <section>
    <RouteComponent
      :textRoutes="['Inicio', userStore.username]"
      :linkRoutes="['/', `/profile/${slug}`]"
    />
    <div class="text-center space-y-2 mt-3">
      <h2 class="font-monserrat text-4xl font-bold">Perfil de Usuario</h2>
      <p class="font-notoSans text-sm">
        {{
          userStore.slug === slug
            ? "Edita lo que desees"
            : "Revisa los datos que desees"
        }}
      </p>
    </div>
  </section>

  <section>
    <div class="grid grid-cols-3 p-4 gap-4 mt-5">
      <div
        class="space-y-4 flex flex-col items-center w-full border- p-6 text-center rounded-lg shadow-md bg-gray-100"
      >
        <img
          src="https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083_640.jpg"
          alt="profile image"
          class="shadow-sm size-[200px]"
        />

        <div class="font-notoSans w-full">
          <h2 class="text-2xl font-bold">Diogo Abregu</h2>
          <div class="flex gap-2 justify-center mt-2">
            <TagComponent tagTitle="Vendedor" :isBold="true" />
            <TagComponent tagTitle="Confiable" />
            <TagComponent tagTitle="Vendedor" />
          </div>
          <div class="flex flex-col items-start mt-3">
            <p>
              <span
                >Correo:
                <a class="font-bold" href="mailto:diogofabricio17@gmail.com"
                  >diogofabricio17@gmail.com</a
                ></span
              >
            </p>
            <p>
              <span> Ubicación: Lima, Perú </span>
            </p>
            <p>
              <span> Telefono: <strong>923790280</strong> </span>
            </p>
            <p>
              <span> Rol: Vendedor </span>
            </p>
          </div>
        </div>
      </div>
      <div
        class="space-y-4 flex flex-col w-full p-6 text-center rounded-lg shadow-md bg-gray-100 col-span-2"
      >
        <div class="h-full w-full justify-between flex items-center">
          <button class="group">
            <Icon
              name="mdi-light:chevron-left"
              size="2rem"
              class="group-hover:text-orange-500 duration-150"
            />
          </button>
          <div>
            <h2 class="font-bold text-2xl">Acciones de cuenta</h2>
            <div class="flex flex-col gap-2 items-center mt-2">
              <button
                class="bg-orange-500 text-white p-1 gap-1 flex items-center"
              >
                <Icon name="mdi-light:account" size="1rem" />
                <span>Editar Cuenta</span>
              </button>
              <button
                class="bg-orange-500 text-white gap-1 p-1 flex items-center"
              >
                <Icon name="mdi-light:clipboard-text" size="1rem" />
                <span>Exportar Datos</span>
              </button>
            </div>
          </div>
          <button class="group">
            <Icon
              name="mdi-light:chevron-right"
              size="2rem"
              class="group-hover:text-orange-500 duration-150"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const router = useRoute();
const userStore = useMyUserStore();
const { slug } = router.params;
</script>
