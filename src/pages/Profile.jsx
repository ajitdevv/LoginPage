import React, { useEffect, useState } from "react";

const Profile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  if (!user) {
    return <p className="text-center mt-10">No user found</p>;
  }

  return (
    <div className="min-h-screen bg-background flex items-start justify-center pt-20">

      <div className="bg-white shadow-lg rounded-xl p-6 w-[360px]">

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-xl font-bold">
            Profile
          </h2>

        </div>

        <div className="border p-4 rounded-lg">

          <p className="mb-2">
            <span className="font-semibold">Name:</span> {user.name}
          </p>

          <p className="mb-2">
            <span className="font-semibold">Email:</span> {user.email}
          </p>

        </div>

      </div>

    </div>
  );
};

export default Profile;