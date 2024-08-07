
import { useContext } from "react";

import authAPI from "../api/user-api"
import { AuthContext, useAuthContext } from "../contexts/AuthContext.jsx";

export const useLogin = () => {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await authAPI.login(email, password);

        changeAuthState(result);

        return result;
    }

    return loginHandler;
}

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async (email, password, rePass) => {
        const result = await authAPI.register(email, password);

        changeAuthState(result);
        
        return result;
    }

    return registerHandler;
}

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext();

    const logoutHandler = async () => {
        try {
            await authAPI.logout();
            localLogout();
        } catch(err) {
            localStorage.clear();
            window.location.reload();
        }
    }

    return logoutHandler;
}