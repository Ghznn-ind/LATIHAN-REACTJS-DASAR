import React, { useMemo, useState } from 'react'

// 47. #70 – useMemo Hook
function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEvan = useMemo(() => {
        let i = 0
        while( i < 200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEvan ? ' Evan' : ' Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    )
}

function Latihan47_UseMemo() {
    return (
        <div>
            <h3>47. #70 – useMemo Hook</h3>
            <Counter />
        </div>
    )
}

export default Latihan47_UseMemo
