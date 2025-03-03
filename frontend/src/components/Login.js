import React, { useState } from "react";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");

    const handleLogin = async () => {
        if (!username) return alert("Enter your Hive username.");
        
        // Redirect user to HiveSigner authentication
        const redirectUri = encodeURIComponent(window.location.origin);
        window.location.href = `https://hivesigner.com/oauth2/authorize?client_id=your_client_id&redirect_uri=${redirectUri}&scope=posting`;
    };

    return (
        <div className="login">
            <h2>Login with HiveSigner</h2>
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
