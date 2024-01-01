import "./mainDashboard.css";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const mainDashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

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
            {error && <div className="error">{error}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default mainDashboard;
