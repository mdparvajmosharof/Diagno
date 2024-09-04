import React from 'react'
import useAdmin from '../Hooks/useAdmin'
import Loading from '../Subpage/Loading';
import { useUser } from '../Hooks/useUser';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    const [user, loading] = useUser()
    
    if(loading||isAdminLoading){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>
}

export default AdminRoutes
