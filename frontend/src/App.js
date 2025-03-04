import React, { useState, useEffect } from "react";
import client from "./config/hiveConfig";  // Import client instead of redeclaring
import Login from "./components/Login";
import NewsFeed from "./components/NewsFeed";
import SubmitNews from "./components/SubmitNews";
import FactCheck from "./components/FactCheck";
import "./styles/App.css";

const App = () => {
    const [username, setUsername] = useState(null);

    // Check for access token in URL (after HiveSigner login)
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get("access_token");

        if (accessToken) {
            client.me(accessToken, (err, res) => {
                if (res && res.user) {
                    setUsername(res.user); // Set the logged-in username
                    window.history.replaceState({}, document.title, "/"); // Remove access token from URL
                }
            });
        }
    }, []);

    const handleLogin = () => {
        window.location.href = client.getLoginURL(); // Redirect to HiveSigner login
    };

    const handleLogout = () => {
        setUsername(null);
    };

    return (
        <div className="App">
            <h1>Decentralized News & Fact-Checking</h1>
            {!username ? (
                <Login onLogin={handleLogin} />
            ) : (
                <>
                    <p>Welcome, {username}! <button onClick={handleLogout}>Logout</button></p>
                    <SubmitNews username={username} />
                    <FactCheck username={username} />
                    <NewsFeed />
                </>
            )}
        </div>
    );
};

export default App;
