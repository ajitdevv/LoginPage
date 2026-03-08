import React, { useState } from "react";
import useAuth from "../hooks/Auth";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const { signup, loading, error } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    await signup(form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">

      <div className="bg-white p-6 rounded-xl w-[360px] shadow">

        <h2 className="text-xl font-bold mb-4">
          Signup
        </h2>

        <input
          name="name"
          placeholder="Name"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
        />

        {error && (
          <p className="text-red-500 text-sm mb-2">
            {error}
          </p>
        )}

        <Button onClick={handleSubmit}>
          {loading ? "Creating..." : "Create Account"}
        </Button>

      </div>

    </div>
  );
};

export default Signup;