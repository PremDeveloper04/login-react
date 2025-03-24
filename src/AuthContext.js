import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const AuthData= createContext();

const AuthContext = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }
        setIsLoading(false)
    }, []);

    const login = (user, token) => {
        setToken(token);
        setUser(user);
    }

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
    }

    return (
        <AuthData.Provider value={{user, token, login, logout, isLoading}}>
            {children}
        </AuthData.Provider>
    )
}

export default AuthContext
