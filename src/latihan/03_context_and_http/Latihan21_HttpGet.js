import React, { Component } from 'react'
import axios from 'axios'

// 21. #42 – HTTP GET Request
class PostList extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data'})
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List Of Posts (Menampilkan 5 pertama untuk preview)
                {
                    posts.length ? 
                    posts.slice(0, 5).map(post => <div key={post.id}><strong>{post.id}.</strong> {post.title}</div>) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null }
            </div>
        )
    }
}

function Latihan21_HttpGet() {
    return (
        <div>
            <h3>21. #42 – HTTP GET Request</h3>
            <PostList />
        </div>
    )
}

export default Latihan21_HttpGet
