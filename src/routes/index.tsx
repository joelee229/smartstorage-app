import React from 'react';

import Loading from '../components/Loading';
import { useAuth } from '../hooks/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
    // Context API
    const { user, loading } = useAuth();

    if(loading){
        return <Loading />;
    }

    // return user ? <AppRoutes /> : <AuthRoutes />;
    return <AppRoutes />;
};

export default Routes;