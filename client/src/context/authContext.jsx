import { useContext, useMemo } from "react";
import { useCallback, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";


export const AuthContext = createContext();

const MY_AUTH = 'MY_AUTH';
const ID = null;

export function AuthContextProvider({children}){
    const [idUser, setIdUser] = useState(
        window.localStorage.getItem(ID)) ?? false
    const [isAuthenticated,setIsAuthenticated] = useState(
        window.localStorage.getItem(MY_AUTH)) ?? false


    const login = useCallback(({email,password})=>{
        fetch(`http://localhost:4000/auth/signIn`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
          })
        .then(function (response) {
            if (response.data) {
                console.log(response.data[0])
                window.localStorage.setItem(MY_AUTH,true);
                window.localStorage.setItem(ID,response.data.id_user);
                setIdUser(response.data[0].id_user)
                setIsAuthenticated(true);
            } else {
                return 'invalid credencials'
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    },[]);

    const logout = useCallback(()=>{
        window.localStorage.removeItem(MY_AUTH);
        setIsAuthenticated(false);
    },[]);

    const value = useMemo(()=>({
        login,
        logout,
        isAuthenticated,
        idUser
    }), [login,logout,isAuthenticated,idUser])


    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}

AuthContextProvider.prototypes = {
    children: PropTypes.object
};

export function useAuthContext() {
    return useContext(AuthContext);
}