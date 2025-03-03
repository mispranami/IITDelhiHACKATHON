import React, { useState } from "react";
import hiveSigner from "hivesigner";

const SubmitNews = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = () => {
        if (!title || !content || !username) {
            alert("All fields are required.");
            return;
        }

        const permlink = title.replace(/\s+/g, "-").toLowerCase();
        const jsonMetadata = JSON.stringify({ tags: ["news"], app: "hive-news-platform" });
        
        const hivesigner = new hiveSigner.Client({ accessToken: "your_access_token" });
        hivesigner.broadcast(
            {
                operations: [[
                    "comment",
                    {
                        parent_author: "",
                        parent_permlink: "news",
                        author: username,
                        permlink,
                        title,
                        body: content,
                        json_metadata: jsonMetadata,
                    },
                ]],
            },
            (err, result) => {
                if (err) console.error("Error posting:", err);
                else alert("✅ News posted successfully!");
            }
        );
    };

    return (
        <div>
            <h2>Submit News</h2>
            <input
                type="text"
                placeholder="Hive Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            ></textarea>
            <button onClick={handleSubmit}>Post News</button>
        </div>
    );
};

export default SubmitNews;
