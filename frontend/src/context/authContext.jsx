import React, { Children, createContext, useState } from 'react'

const userContext = createContext()
const authContext = (Children) => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)

    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")

    }
  return (
    <userContext.Provider value={(user, login, logout)}>
        {Children}

    </userContext.Provider>
  )
}
export const useAuth = () => useContext(userContext)

export default authContext