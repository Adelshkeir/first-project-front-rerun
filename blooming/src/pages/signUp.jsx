import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useLogout } from "../hooks/useLogout.jsx";

//DO THE LOGOUT STUFF ON THE BUTTON WHICH IS ON THE SIDEBAR MATERIAL UI

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password, name);
  };

  // const { logout } = useLogout();


  // const handleClick = async () => {
  //   logout();
  // };

  return (
    <>
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">{error}</div>}



    </form>
   
    {/* <button onClick={handleClick}>Logout</button> */}
 </>
  );
};

export default Signup;
