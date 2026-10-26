import React, { useState } from 'react'

// 26. #48 – useState with array
function HookCounterFour() {
    const [ items, setItems ] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

function Latihan26_UseStateArray() {
    return (
        <div>
            <h3>26. #48 – useState with array</h3>
            <HookCounterFour />
        </div>
    )
}

export default Latihan26_UseStateArray
