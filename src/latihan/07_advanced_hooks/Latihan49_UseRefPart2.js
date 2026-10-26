import React, { Component, useEffect, useRef, useState } from 'react'

// 49. #72 – useRef Hook Part 2
class ClassTimer extends Component {
    interval
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Class Timer - {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
            </div>
        )
    }
}

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    )
}

function Latihan49_UseRefPart2() {
    return (
        <div>
            <h3>49. #72 – useRef Hook Part 2</h3>
            <ClassTimer />
            <HookTimer />
        </div>
    )
}

export default Latihan49_UseRefPart2
