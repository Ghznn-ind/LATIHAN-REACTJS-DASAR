import axios from 'axios'
import React, { useEffect, useState } from 'react'

// 33. #55 – Fetching data with useEffect Part 1
function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h3>33. #55 – Fetching data with useEffect Part 1</h3>
            <ul>
                {posts.slice(0, 5).map(post => (
                    <li key={post.id}><strong>{post.id}.</strong> {post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching
