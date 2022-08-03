export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
    });
})