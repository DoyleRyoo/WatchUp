import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/firebase/auth";

import useAuthStore from "../store/authStore";

function LoginPage() {
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const user = await login(
        email,
        password
      );

      setUser({
        uid: user.uid,
        email: user.email,
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl bg-slate-900 p-8 shadow-xl"
      >
        <h1 className="text-white text-3xl font-bold mb-8 text-center">
          Watch-Up
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 rounded-xl p-3 bg-slate-800 text-white"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 rounded-xl p-3 bg-slate-800 text-white"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 rounded-xl p-3 text-white"
        >
          {loading
            ? "로그인 중..."
            : "로그인"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;