import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { login, loading, error } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate()
  const handleSubmit = async () => {

    const success = await login(email, password);

    if (success) {
  navigate("/profile");
}

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">

      <div className="bg-white p-6 rounded-xl w-[360px] shadow">

        <h2 className="text-xl font-bold mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm mb-2">
            {error}
          </p>
        )}

        <Button onClick={handleSubmit}>
          {loading ? "Loading..." : "Login"}
        </Button>

      </div>

    </div>
  );
};

export default Login;