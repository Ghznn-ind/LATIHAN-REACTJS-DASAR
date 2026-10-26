import React, { Component } from 'react';

// 6. #10 – State
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message : 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

function Latihan06_State() {
    return (
        <div>
            <h3>6. #10 – State</h3>
            <Message />
        </div>
    )
}

export default Latihan06_State
