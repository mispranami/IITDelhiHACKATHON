import React, { useState } from "react";
import { client } from "../config/hiveConfig";

const SubmitNews = ({ username }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const submitPost = async () => {
        if (!title || !content) return alert("Title and content are required.");
        
        try {
            const permlink = title.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-");
            await client.broadcast.comment(
                {
                    parent_author: "",
                    parent_permlink: "news",
                    author: username,
                    permlink,
                    title,
                    body: content,
                    json_metadata: JSON.stringify({ tags: ["news", "hive"] }),
                },
                {}
            );
            alert("News submitted successfully!");
        } catch (error) {
            console.error("Error submitting news:", error);
        }
    };

    return (
        <div className="submit-news">
            <h2>Submit News</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            <button onClick={submitPost}>Submit</button>
        </div>
    );
};

export default SubmitNews;
