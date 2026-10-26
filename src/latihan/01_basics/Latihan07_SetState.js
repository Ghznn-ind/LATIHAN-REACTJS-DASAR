import React, { Component } from 'react'

// 7. #11 – setState
class Counter extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
    }

    increment(){
        // this.setState({
        //         count: this.state.count + 1
        //     }, 
        //     () => {
        //         console.log('Callback value', this.state.count)
        //     }
        // )

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment 5</button>
            </div>
        )
    }
}

function Latihan07_SetState() {
    return (
        <div>
            <h3>7. #11 – setState</h3>
            <Counter />
        </div>
    )
}

export default Latihan07_SetState
