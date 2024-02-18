import { useEffect, useState } from "react";
import usePost from "../hooks/usePost";
import { BASE_URL } from "../utils/BaseUrl";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("Password@1");
  const navigate = useNavigate();

  const URL_PATH = "Account/login";
  const { postData, isLoading, error, response } = usePost(BASE_URL, URL_PATH);

  useEffect(() => {
    if (response.token && response.refreshToken) {
      sessionStorage.setItem("userId", response.userId);
      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("refreshToken", response.refreshToken);
      navigate("/dashboard", { replace: true });
    }
  }, [response, navigate]);

  useEffect(() => {
    if (sessionStorage.getItem("userId")) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      const credentials = { email, password };
      await postData(credentials);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button type="submit" disabled={isLoading}>
          Login
        </button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
}
