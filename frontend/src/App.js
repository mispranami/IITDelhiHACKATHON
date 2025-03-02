import React, { useState } from "react";
import Login from "./components/Login";
import NewsFeed from "./components/NewsFeed";
import SubmitNews from "./components/SubmitNews";
import FactCheck from "./components/FactCheck";
import "./styles/App.css";

const App = () => {
    const [username, setUsername] = useState(null);

    return (
        <div className="App">
            <h1>Decentralized News & Fact-Checking</h1>
            {!username ? <Login onLogin={setUsername} /> : <>
                <SubmitNews username={username} />
                <FactCheck />
                <NewsFeed />
            </>}
        </div>
    );
};

export default App;
