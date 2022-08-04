import type { IncomingMessage, ServerResponse } from 'http';
import { useBody } from 'h3';

export default async ( req: IncomingMessage, res: ServerResponse ) => {
    if( req.method !== 'POST' ) {
        res.statusCode = 400;
        return 'Metodo errato';
    }

    
    

    //@ts-ignore
    const { user } = await useBody(req); //Solo per POST request
    console.log(user);
    //@ts-ignore
    req.user = user;

    return { updated: true }
}