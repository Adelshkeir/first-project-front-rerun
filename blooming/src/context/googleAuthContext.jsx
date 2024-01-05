import React, { createContext, useContext, useState } from "react";
import { auth, provider } from "../components/googleSignIn/config.jsx";
import { signInWithPopup } from "firebase/auth";

// Create a context
const ValueContext = createContext();

// Create a provider to wrap your components and provide the value state
const ValueProvider = ({ children }) => {
  const [value, setValue] = useState();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <ValueContext.Provider value={{ value, handleClick }}>
      {children}
    </ValueContext.Provider>
  );
};

// Custom hook to easily access the context value
const useValue = () => useContext(ValueContext);

export { ValueProvider, useValue };
