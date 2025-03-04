import React, { useEffect, useState } from "react";
import client from "../config/hiveConfig";  



const NewsFeed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const result = await client.database.getDiscussions("trending", { tag: "news", limit: 10 });
                setPosts(result);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        
        fetchNews();
    }, []);

    return (
        <div>
            <h2>Trending News</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.permlink}>
                        <a href={`https://hive.blog/@${post.author}/${post.permlink}`} target="_blank" rel="noopener noreferrer">
                            {post.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsFeed;
