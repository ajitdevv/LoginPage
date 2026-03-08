import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup, loading } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      return "Name is required";
    }

    if (!form.email.trim()) {
      return "Email is required";
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Invalid email format";
    }

    if (!form.password) {
      return "Password is required";
    }

    if (form.password.length < 6) {
      return "Password must be at least 6 characters";
    }

    return null;
  };
  const Navgate = useNavigate();
  const handleSubmit = async () => {
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    await signup(form);

    alert("Account created");
    Navgate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-6 rounded-xl w-[360px] shadow">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

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

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <Button onClick={handleSubmit}>
          {loading ? "Creating..." : "Create Account"}
        </Button>
      </div>
    </div>
  );
};

export default Signup;
