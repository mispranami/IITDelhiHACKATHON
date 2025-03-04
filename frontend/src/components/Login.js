import React from "react";

const Login = () => {
    const handleLogin = () => {
        const redirectUri = encodeURIComponent(window.location.origin);
        window.location.href = `https://hivesigner.com/oauth2/authorize?client_id=your_client_id&redirect_uri=${redirectUri}&scope=posting`;
    };

    return (
        <div className="login">
            <h2>Login with HiveSigner</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
