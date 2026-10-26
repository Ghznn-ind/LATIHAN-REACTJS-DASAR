import React, { Component, useState } from 'react'

// 24. #46 – useState with previous state
class ClassCounterTwo extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Class Count {this.state.count}</button>
            </div>
        )
    }
}

function HookCounterTwo() {
    const initialCount = 0
    const [ count, setCount ] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Hook Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

function Latihan24_UseStatePrevState() {
    return (
        <div>
            <h3>24. #46 – useState with previous state</h3>
            <ClassCounterTwo />
            <br />
            <HookCounterTwo />
        </div>
    )
}

export default Latihan24_UseStatePrevState
