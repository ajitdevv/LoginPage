import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Enter = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNavigate = (path) => {

    try {

      setLoading(true);
      setError(null);

      setTimeout(() => {
        navigate(path);
      }, 300);

    } catch (err) {

      setError("Navigation failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-background p-4">

      <div className="w-[360px] h-[640px] bg-white rounded-xl shadow-md flex flex-col justify-between p-6">

        {/* top section */}
        <div className="flex-1"></div>

        {/* bottom section */}
        <div className="space-y-4">

          <div>

            <h1 className="text-2xl font-bold text-gray-800">
              Welcome to PopX
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <Button
            onClick={() => handleNavigate("/signup")}
            variant="primary"
          >
            {loading ? "Loading..." : "Create Account"}
          </Button>

          <Button
            onClick={() => handleNavigate("/login")}
            variant="secondary"
          >
            Already Registered? Login
          </Button>

        </div>

      </div>

    </div>

  );
};

export default Enter;