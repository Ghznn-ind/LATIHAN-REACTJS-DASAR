import React, { useReducer } from 'react'

// 41. #63 – useReducer (complex state & action)
const initialState = {
    firstCounter: 0, 
    secondCounter: 10
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First Couter - {count.firstCounter}</div>
            <div>Second Couter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1})}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1})}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'increment', value: 5})}>
                Increment 5
            </button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5})}>
                Decrement 5
            </button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1})}>
                    Increment Counter 2
                </button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1})}>
                    Decrement Counter 2
                </button>
            </div>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
        </div>
    )
}

function Latihan41_UseReducerComplex() {
    return (
        <div>
            <h3>41. #63 – useReducer (complex state & action)</h3>
            <CounterTwo />
        </div>
    )
}

export default Latihan41_UseReducerComplex
