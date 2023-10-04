import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.confige";


export const AuthProvider = createContext(null)
const Provider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register  user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const logInUSer = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)


    }
    // sign out user
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)

    }

    // Auth state change event
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])




    // context API variables
    const authInfo = {
        createUser,
        user,
        signOutUser,
        logInUSer,
        loading
    }
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;