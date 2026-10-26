import React, { useEffect, useRef } from 'react'

// 48. #71 – useRef Hook Part 1
function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <label>Auto-focused input: </label>
            <input ref={inputRef} type='text' placeholder='Otomatis fokus saat render' />
        </div>
    )
}

function Latihan48_UseRefPart1() {
    return (
        <div>
            <h3>48. #71 – useRef Hook Part 1</h3>
            <FocusInput />
        </div>
    )
}

export default Latihan48_UseRefPart1
