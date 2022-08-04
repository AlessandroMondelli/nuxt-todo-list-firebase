export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const userCookie = useCookie("userCookie");

        if(userCookie._value != false) {
            return navigateTo('/');
        }
    });
})