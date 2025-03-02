import React, { useState } from "react";
import { client } from "../config/hiveConfig";

const FactCheck = () => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);

    const checkFact = async () => {
        if (!query.trim()) return;
        try {
            // Simulating fact-checking logic (Replace with actual API)
            const fakeResponse = { verdict: Math.random() > 0.5 ? "True" : "False" };
            setResult(fakeResponse.verdict);
        } catch (error) {
            console.error("Error fetching fact-check:", error);
            setResult("Error checking fact.");
        }
    };

    return (
        <div className="fact-check">
            <h2>Fact Check</h2>
            <textarea
                placeholder="Enter news to check..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={checkFact}>Check</button>
            {result && <p>Verdict: {result}</p>}
        </div>
    );
};

export default FactCheck;
