import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined)
  const [id, setId] = useState(undefined)

 


  async function getLoggedIn() {
    const loggedInRes = await axios.get("http://localhost:8000/loggedIn")
    setLoggedIn(loggedInRes.data.name)
    setId(loggedInRes.data.id)
  }

  useEffect(() => {
    getLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ id,loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider }