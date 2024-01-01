import { AuthContext } from "../context/authContext";
import { useContext } from "react";

//if we want to use the authContext value(the admin value) on the state in any component we just invoke that hook we made and we destructure the admin from the context object (we can use dispatches and update the states from the imported auth context)
export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used inside an AuthContextProvider"
    );
  }
  return context;
};
