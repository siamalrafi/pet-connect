import React, { createContext, useEffect, useState } from "react";

// create context ---
export const CONTEXT = createContext();

const UserContext = ({ children }) => {
   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("http://localhost:5000/api/v1/users/me", {
         method: "GET",
         headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => setUser(data));
   }, []);

   const authInfo = {
      user,
      setUser,
      loading,
      // handleDark mode ---
   };

   return <CONTEXT.Provider value={authInfo}>{children}</CONTEXT.Provider>;
};

export default UserContext;
