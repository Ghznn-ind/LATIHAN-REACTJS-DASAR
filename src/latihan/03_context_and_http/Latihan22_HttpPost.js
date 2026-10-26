import React, { Component } from 'react'
import axios from 'axios'

// 22. #43 – HTTP Post Request
class PostForm extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
                alert('POST berhasil terkirim! Cek console.')
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { userId, title, body } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input 
                            type='text' 
                            name='userId' 
                            placeholder='User ID'
                            value={userId}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input 
                            type='text' 
                            name='title' 
                            placeholder='Title'
                            value={title} 
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input 
                            type='text' 
                            name='body' 
                            placeholder='Body'
                            value={body} 
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

function Latihan22_HttpPost() {
    return (
        <div>
            <h3>22. #43 – HTTP Post Request</h3>
            <PostForm />
        </div>
    )
}

export default Latihan22_HttpPost
