import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = async (auth: Auth, email: string, password: string) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    } catch (error: any) {
        throw new Error('Sign in failed: ' + error.message);
    }
};

export const signUp = async (auth: Auth, email: string, password: string) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        return response;
    } catch (error: any) {
        throw new Error('Sign up failed: ' + error.message);
    }
};
