export default defineEventHandler((event) => {
    //@ts-ignore
    const userCookie = useCookie( event.req, 'userCookie' );

    //@ts-ignore
    event.req.user = userCookie;
});