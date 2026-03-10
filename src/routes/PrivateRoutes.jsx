import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { BiLoader } from 'react-icons/bi';

const PrivateRoutes = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <BiLoader></BiLoader>
    }

    if(!user){
       return <Navigate to='/signIn' state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoutes;