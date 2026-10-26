import axios from 'axios'
import React, { useEffect, useState } from 'react'

// 35. #57 – Fetching data with useEffect Part 3
function DataFetching() {
    const [id, setId] = useState(1)
    const [post, setPost] = useState({})
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    return (
        <div>
            <h3>35. #57 – Fetching data with useEffect Part 3</h3>
            <input 
                type='text'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
