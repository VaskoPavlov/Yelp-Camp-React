import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const AuthGuard = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default AuthGuard;
