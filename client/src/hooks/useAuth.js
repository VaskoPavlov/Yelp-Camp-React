
import { useContext } from "react";

import authAPI from "../api/user-api"
import { AuthContext } from "../contexts/AuthContext";

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