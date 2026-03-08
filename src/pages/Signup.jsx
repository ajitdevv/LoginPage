import { useState } from "react";
import { saveUser, getUser } from "../utils/storage";

const useAuth = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (data) => {

    try {

      setLoading(true);
      setError(null);

      saveUser(data);

    } catch (err) {

      setError("Signup failed");

    } finally {

      setLoading(false);

    }

  };

  const login = async (email, password) => {

    try {

      setLoading(true);
      setError(null);

      const user = getUser();

      if (!user) {
        throw new Error("User not found");
      }

      if (email !== user.email || password !== user.password) {
        throw new Error("Invalid credentials");
      }

      return true;

    } catch (err) {

      setError(err.message);
      return false;

    } finally {

      setLoading(false);

    }

  };

  return { signup, login, loading, error };

};

export default useAuth;