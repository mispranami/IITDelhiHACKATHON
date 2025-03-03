import React, { useState } from "react";

const FactCheck = () => {
    const [username, setUsername] = useState("");
    const [postPermlink, setPostPermlink] = useState("");
    const [reportContent, setReportContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("http://localhost:3000/submit-report", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, post_permlink: postPermlink, report_content: reportContent }),
        });
        
        const data = await response.json();
        alert(data.message);
    };

    return (
        <div>
            <h2>Fact-Check a News Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Hive username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Post Permlink"
                    value={postPermlink}
                    onChange={(e) => setPostPermlink(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Enter fact-checking report"
                    value={reportContent}
                    onChange={(e) => setReportContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default FactCheck;
