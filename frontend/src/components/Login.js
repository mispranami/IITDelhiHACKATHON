import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");

    const handleLogin = async () => {
        if (!username) return alert("Enter your Hive username.");
        if (username.length < 3) return alert("Username must be at least 3 characters long.");

        try {
            onLogin(username);
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div className="login">
            <h2>Login with Hive</h2>
            <input
                type="text"
                placeholder="Enter Hive username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
