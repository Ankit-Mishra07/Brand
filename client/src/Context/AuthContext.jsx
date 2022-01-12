import React, { createContext, useState } from 'react'

export const AuthContext = createContext() 

export const AuthContextProvider = ({children}) => {

    if(localStorage.getItem("brandusers") === null) {
        localStorage.setItem("brandusers", JSON.stringify([]))
    }

    let get = JSON.parse(localStorage.getItem("brandusers"))
    let last = get[get.length-1] || ""


    const [token, setToken] = useState('')
    const [isAuth, setIsAuth] = useState(false)
    const [email, setEmail] = useState(last)

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
        localStorage.setItem("brandusers", JSON.stringify([]))
    }

    return (
        <AuthContext.Provider value={{token, isAuth, email, handleToken, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}