import React, { useState } from 'react'

// 31. #53 – useEffect with cleanup
function HookMouse() {
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const logMousePosition =  e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    React.useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // 31. #53 – useEffect with cleanup
        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse />}
        </div>
    )
}

function Latihan31_UseEffectCleanup() {
    return (
        <div>
            <h3>31. #53 – useEffect with cleanup</h3>
            <MouseContainer />
        </div>
    )
}

export default Latihan31_UseEffectCleanup
