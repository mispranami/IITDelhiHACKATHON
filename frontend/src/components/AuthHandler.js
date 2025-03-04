import { useEffect } from "react";
import client from "../config/hiveConfig";


const client = new hivesigner.Client({
    app: "", // No need to specify an app name
    callbackURL: "http://localhost:3000", // Change this for production
    scope: ["login", "vote", "comment"], // Permissions
});

const AuthHandler = ({ onLogin }) => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get("access_token");

        if (accessToken) {
            client.me(accessToken, (err, res) => {
                if (res && res.user) {
                    onLogin(res.user); // Pass username to App.js
                    window.history.replaceState({}, document.title, "/"); // Clean URL
                }
            });
        }
    }, [onLogin]);

    return null; // No UI needed, just handles authentication
};

export default AuthHandler;
