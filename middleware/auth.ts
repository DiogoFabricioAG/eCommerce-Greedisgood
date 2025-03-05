export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useMyUserStore();

    if (!userStore.username) {
        // Si el usuario NO está autenticado y NO está en /session, lo redirige
        if (to.path !== "/session") {
            return navigateTo("/session");
        }
    } else {
        // Si el usuario ESTÁ autenticado y trata de ir a /session, lo redirige al dashboard
        if (to.path === "/session") {
            return navigateTo("/");
        }
    }
});
