import React, { Component, useState } from 'react'

// 23. #45 – useState Hook
class ClassCounter extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Class Count {this.state.count}</button>
            </div>
        )
    }
}

function HookCounter() {

    const [ count, setCount ] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Hook Count {count}</button>
        </div>
    )
}

function Latihan23_UseState() {
    return (
        <div>
            <h3>23. #45 – useState Hook</h3>
            <ClassCounter />
            <HookCounter />
        </div>
    )
}

export default Latihan23_UseState
