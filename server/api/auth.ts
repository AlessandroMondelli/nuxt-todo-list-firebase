export default defineEventHandler(async (event) => {
    if( event.req.method !== 'POST' ) {
        event.res.statusCode = 400;
        return 'Metodo errato';
    }

    //@ts-ignore
    const { user } = await useBody(event.req); //Solo per POST request

    //@ts-ignore
    event.req.user = user;

    return { updated: true }
});