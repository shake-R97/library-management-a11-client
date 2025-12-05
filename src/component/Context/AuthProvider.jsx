import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase.init.config';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';

const AuthProvider = ({children}) => {

    const [user , setUser ] = useState(null)
    const [loader , setLoader ] = useState(true)




    // Create New User

     const createUser = (email , password) => {
        setLoader(true)
       return createUserWithEmailAndPassword(auth , email , password)
     }


    //  Update User 

    const updateUserProfile = (updatedData) => {
        setLoader(true)
        return updateProfile(auth.currentUser , updatedData)
    } 

    const signInUser = (email , password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth , email , password)
    }


    // logout user

    const signOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }



    //  observer

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser);
            setLoader(false)
        })
        return ()=> {
            unsubscribe();
        }
    }, [])



    const userData = {
        createUser,
        user,
        setUser,
        updateUserProfile,
        signOutUser,
        signInUser,
        loader

    };

    if(loader){
        return <Loader></Loader>;
    }

    return (
       <AuthContext value={userData}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;