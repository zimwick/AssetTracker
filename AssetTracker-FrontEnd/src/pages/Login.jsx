import { useEffect, useState } from "react";
import usePost from "../hooks/usePost";
import { BASE_URL } from "../utils/BaseUrl";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("Password@1");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const URL_PATH = "Account/login";
  const { postData, isLoading, error, response } = usePost(BASE_URL, URL_PATH);

  useEffect(() => {
    if (response.token && response.refreshToken) {
      setLoginError(false);
      sessionStorage.setItem("userId", response.userId);
      sessionStorage.setItem("token", response.token);
      sessionStorage.setItem("refreshToken", response.refreshToken);
      navigate("/dashboard", { replace: true });
    } else if (sessionStorage.getItem("userId")) {
      setLoginError(false);
      navigate("/dashboard", { replace: true });
    }
  }, [response, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      const credentials = { email, password };
      const result = await postData(credentials); // Capture the result from postData
      if (!result.success && result.status === 401) {
        setLoginError(true);
        setEmail("user@example.com");
        setPassword("Qwerty");
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Login
        </h2>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 rounded bg-gray-50 border border-gray-300"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 rounded bg-gray-50 border border-gray-300"
          />
        </div>
        {loginError && (
          <p className="bg-red-100 text-red-700 border border-red-400 text-sm rounded-lg p-3 mt-2 mb-4 text-center">
            Error: Incorrect username or password
          </p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
