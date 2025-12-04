// import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase.init.config';

const AuthProvider = ({children}) => {

    // const [user , setUser ] = useState(null)
    // const [loader , setLoader ] = useState(true)


    // Create New User

     const CreateUser = (email , password) => {
       return createUserWithEmailAndPassword(auth , email , password)
     }

    const userData = {

    }
    return (
       <AuthContext value={userData}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;