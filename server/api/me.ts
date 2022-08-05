export default defineEventHandler((event) => {
    //@ts-ignore
    //Trasformo stringa in oggetto JSON
    const user = JSON.parse( event.req.user );

    //Ritorno dati user 
    return user ? user : false;
});