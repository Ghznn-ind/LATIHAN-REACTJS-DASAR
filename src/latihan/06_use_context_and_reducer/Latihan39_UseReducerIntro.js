import React from 'react'

// 39. #61 – useReducer Hook
function Latihan39_UseReducerIntro() {
    return (
        <div>
            <h3>39. #61 – useReducer Hook</h3>
            <p>
                <code>useReducer</code> adalah sebuah Hook yang digunakan untuk manajemen state di React, alternatif yang lebih kuat daripada <code>useState</code> untuk state yang kompleks.
            </p>
            <p>
                <code>useReducer</code> terinspirasi dari pola Redux:
            </p>
            <ul>
                <li><strong>Reducer Function:</strong> <code>(currentState, action) =&gt; newState</code></li>
                <li><strong>Dispatch:</strong> Mengirimkan action ke reducer untuk memperbarui state.</li>
                <li><strong>Syntax:</strong> <code>const [state, dispatch] = useReducer(reducer, initialState)</code></li>
            </ul>
        </div>
    )
}

export default Latihan39_UseReducerIntro
