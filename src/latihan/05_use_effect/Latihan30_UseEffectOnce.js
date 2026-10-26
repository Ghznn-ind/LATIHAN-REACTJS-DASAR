import React, { Component, useEffect, useState } from 'react'

// 30. #52 – Run effects only once
class ClassMouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    // 31. #53 – useEffect with cleanup
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>
                Class Mouse: X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}

function HookMouse() {

    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const logMousePosition =  e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
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

function Latihan30_UseEffectOnce() {
    return (
        <div>
            <h3>30. #52 – Run effects only once</h3>
            <ClassMouse />
            <HookMouse />
        </div>
    )
}

export default Latihan30_UseEffectOnce
