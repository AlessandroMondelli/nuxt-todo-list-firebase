import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged 
} from "firebase/auth";
import { useFirebaseUser } from "./useStates";

//Export asincrono per creazione utente
export const createUser = async( email, password ) => {
    const auth = getAuth();

    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
    });

    navigateTo('/');
    return credentials;
}

//Export asincrono per login
export const signInUser = async( email, password ) => {
    const auth = getAuth();

    const credentials = await signInWithEmailAndPassword( auth, email, password )
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
    });

    navigateTo('/');
    return credentials;
}

//Export asincrono per inizializzazione utente
export const initUser = async() => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;

    const userCookie = useCookie('userCookie'); //Creo cookie per server

    //Al cambio di stato dell'utente
    onAuthStateChanged(auth, (user) => {
        //Se loggato
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;

            //Cookie per controllo front-end
            const userId = useCookie('userId');
            userId.value = uid;
        //Se non loggato
        } else {
            //Cookie per controllo front-end
            const userId = useCookie('userId');
            userId.value = false;
        }

        firebaseUser.value = user; //Passo a variabile i dati dell'utente
        userCookie.value = user; //Aggiungo a cookie i dati dell'utente

        $fetch('/api/auth', {
            method: "POST",
            body: { user },
        });
    });
}

//Export asincrono per logout
export const signOutUser = async() => {
    const auth = getAuth();

    const result = await auth.signOut();
}


