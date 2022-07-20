import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";



export const AuthContext = createContext();
export const useAuthContext=()=>{
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
