import axios from 'axios'
import React, { useEffect, useState } from 'react'

// 34. #56 – Fetching data with useEffect Part 2
function DataFetchingPart2() {
    const [id, setId] = useState(1)
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <h3>34. #56 – Fetching data with useEffect Part 2</h3>
            <input 
                type='text'
                placeholder='Masukkan ID Post'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <div><strong>{post.id ? `Post #${post.id}:` : ''}</strong> {post.title}</div>
        </div>
    )
}

export default DataFetchingPart2
