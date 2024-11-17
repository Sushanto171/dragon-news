/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from './../../firbase.init/firebase';
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const logInWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider)
}

const logInWithGithub = ()=> {
    return signInWithPopup(auth, githubProvider)
};

const signIn =(email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

const createUser = (email, password) =>{
return  createUserWithEmailAndPassword(auth, email, password)
}

const userSignOut =()=>{
    return signOut(auth)
} ;

useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, currentUser =>{
        if(currentUser){
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        }else{
            setUser(null)
            setLoading(false)
        }
    })
    return ()=> unSubscribe();
},[])
const authInfo = {
    user,
     setUser,
     logInWithGoogle,
     logInWithGithub,
     userSignOut,
     createUser,
     loading,
     signIn,
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;