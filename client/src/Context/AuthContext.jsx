import React, { createContext, useState } from 'react'

export const AuthContext = createContext() 

export const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState('')
    const [isAuth, setIsAuth] = useState(false)
    const [email, setEmail] = useState()
    const handleToken = (token, email) => {
        if(token && email) {
            setIsAuth(true)
            setToken(token)
            setEmail(email)
        }
    }

    const handleLogout = () => {
        setIsAuth(false)
        setToken("")
        setEmail("")
    }

    return (
        <AuthContext.Provider value={{token, isAuth, email, handleToken, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}