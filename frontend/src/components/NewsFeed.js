import React, { useEffect, useState } from "react";
import { client } from "../config/hiveConfig";

const NewsFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const result = await client.database.getDiscussions("trending", { tag: "news", limit: 10 });
                setPosts(result);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="news-feed">
            <h2>News Feed</h2>
            {posts.map((post) => (
                <div key={post.permlink} className="news-item">
                    <h3>{post.title}</h3>
                    <p>{post.body.substring(0, 150)}...</p>
                    <a href={`https://hive.blog/@${post.author}/${post.permlink}`} target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;
