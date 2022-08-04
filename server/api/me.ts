import type { IncomingMessage, ServerResponse } from 'http';

export default async ( req: IncomingMessage, res: ServerResponse ) => {
    //@ts-ignore
    const user = req.user;

    //Ritorno dati user 
    return user ? user : "User non loggato";
}