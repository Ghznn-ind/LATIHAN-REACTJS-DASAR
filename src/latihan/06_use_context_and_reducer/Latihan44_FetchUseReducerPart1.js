import axios from 'axios'
import React, { useEffect, useState } from 'react'

// 44. #66 – Fetching data with useReducer Part 1 (using useState)
function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong!')
            })
    }, [])

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

function Latihan44_FetchUseReducerPart1() {
    return (
        <div>
            <h3>44. #66 – Fetching data with useReducer Part 1</h3>
            <DataFetchingOne />
        </div>
    )
}

export default Latihan44_FetchUseReducerPart1
