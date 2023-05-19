import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";

export const AuthContext = createContext(null);

 const auth =getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [reload,setReload]=useState(true)

    const CreateUser =(email,password)=>{
        setReload(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password)=>{
      setReload(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
    const GoogleProvider = new GoogleAuthProvider();
    const logInWithGoogle =()=>{
        // setReload(true)
        return signInWithPopup(auth,GoogleProvider)
      }


    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,loggedUser=>{
         console.log("user logged in observer",loggedUser)
         setUser(loggedUser)
         setReload(false)
          
        })
        return ()=>{
           unsubscribe()
        }
     },[])

     const logOut =()=>{
        // setReload(true)
        return  signOut(auth)
      }


      

      
      const authInformation ={
        user,
        CreateUser,
        signIn,
        logOut,
        reload, 
        logInWithGoogle,
       
      }

    return (
        <AuthContext.Provider value={authInformation}>
        {children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;