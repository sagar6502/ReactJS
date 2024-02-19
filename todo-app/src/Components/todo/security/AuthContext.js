
import { createContext, useState } from "react";
import { useContext } from 'react'
//Create a context


export const AuthContext  = createContext()

export const useAuth = () => useContext(AuthContext)

//Share the created content with other components

export default function AuthProvider({ children }) {
    //Put some  state in the context

    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        if(username === 'sagarsunar' && password ==='sunar123'){
            setAuthenticated(true)
            return true
        }else{
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    const valueToBeShared = {isAuthenticated, login, logout}
    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}


