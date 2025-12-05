import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Loader from '../Loader/Loader';
import { Navigate, useLocation } from 'react-router';

const PrivateRouteProvider = ({children}) => {

    const {user , loader} = use(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loader){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate state={location?.pathname} to={'/login'}></Navigate>
    }

    return children;
};

export default PrivateRouteProvider;