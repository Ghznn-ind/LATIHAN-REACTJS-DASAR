import React, { useReducer } from 'react'

// 40. #62 – useReducer (simple state & action)
const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Cout - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

function Latihan40_UseReducerSimple() {
    return (
        <div>
            <h3>40. #62 – useReducer (simple state & action)</h3>
            <CounterOne />
        </div>
    )
}

export default Latihan40_UseReducerSimple
