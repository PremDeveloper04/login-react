import React, { useContext } from 'react';
import { AuthData } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const OpenRoute = ({ children }) => {
    const { user, token, isLoading } = useContext(AuthData);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return user && token ? <Navigate to="/dashboard" /> : children;
};

export default OpenRoute;
