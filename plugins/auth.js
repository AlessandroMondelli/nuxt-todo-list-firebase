export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const userCookie = useCookie("userId");

        if(userCookie._value !== false) {
            return navigateTo('/');
        }
    });
})