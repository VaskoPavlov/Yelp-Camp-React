import { createContext } from "react";


export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
		localStorage.setItem('accessToken', state.accessToken);

		setAuthState(state);
	};

	const contextData = {
		userId: authState._id,
		email: authState.email,
		accessToken: authState.accessToken,
		isAuthenticated: !!authState.email,
		changeAuthState,
	};

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}