// 1 auth context
// 2 wrapping it in index.js
// 3 creating useAuthContext hook
// 4 useSignup hook then import it to signUp page
// 5 useLogout hook
// 6 useLogin hook
// 7 setting initial auth status so when the admin refresh the page will not loose the token and stay on the page (not logged out) >> first we check if admin is logged in or no so we can access the needed page depending on the admin status (done in the adminPage) then setting the initial auth status in done in this page
import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { admin: action.payload }; //the admin will be whatever the payload is on the action (admin that we are getting from the server)

    //here we don't need the payload because the admin is logging out
    case "LOGOUT":
      return { admin: null };
    default:
      return state;
  }
};

//Create a custom component that gonna wrap our entire application and provide a value from the above created context
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    admin: null, //because at first the admin will not be logged in when starting the website
  });


  //RECAP: when the app loads and the AuthContextProvider renders the useEffect function will run just once so if the user exists an login action will take place or it will stay null if it doesn't exists


  //when the application starts it will check if the token is available
  //we parse it to an object because it is a json string
  // so if this('admin) is valid so we have all the admin properties including the token else we get null
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));

    if (admin) {
      dispatch({ type: "LOGIN", payload: admin });
    }
  }, []);

  //it wraps the children wish is the app component in order to be available all over the app
  //it include the state of the admin (null,logged in,logged out...)
  //dispatch because we need to call this function from other places also
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

//2 go to index.js to wrap the app with the provider
