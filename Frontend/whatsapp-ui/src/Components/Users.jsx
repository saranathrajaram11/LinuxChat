import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.electronAPI) {
      window.electronAPI.getUserData().then((data) => {
        console.log("User Data:", data);
      }).catch((err) => console.error("IPC error:", err));
    } else {
      console.warn(
        "⚠️ electronAPI is undefined — likely running in browser, not Electron"
      );
    }
  }, []);
  return (
    <>
      <div className="p-6">
        <h1>Electron connected React IPC demo</h1>
        {user ? (
          <p className="mt-4 text-lg">
            Name: {user.name} — Status: {user.status}
          </p>
        ) : (
          <p>Loading user...</p>
        )}
      </div>
    </>
  );
};

export default Users;
