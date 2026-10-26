import React, { Component } from 'react'

// 10. #14 – Binding Event Handlers
class EventBind extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye !'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye !'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

function Latihan10_BindingEventHandlers() {
    return (
        <div>
            <h3>10. #14 – Binding Event Handlers</h3>
            <EventBind />
        </div>
    )
}

export default Latihan10_BindingEventHandlers
