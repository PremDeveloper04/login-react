import React, { useContext } from 'react';
import { AuthData } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
    const { user, token, isLoading } = useContext(AuthData);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return user && token ? children : <Navigate to="/" replace />;
};

export default ProtectRoute;
