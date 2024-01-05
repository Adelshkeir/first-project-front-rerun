import "./mainDashboard.css";
import { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import googleIcon from "../../assets/google.png";
import { useValue } from "../../context/googleAuthContext";

const mainDashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const {handleClick} = useValue()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <div className="main-dashboard-admin">
      <div className="form-dashboard">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="button-container">
            {/* the button will be disabled when isLoading is true */}
            <button className="btn" disabled={isLoading}>
              Login
            </button>
          </div>
        </form>
      </div>
      <button className="btn-google" onClick={handleClick}>
        <img src={googleIcon} />
      </button>
    </div>
  );
};

export default mainDashboard;
