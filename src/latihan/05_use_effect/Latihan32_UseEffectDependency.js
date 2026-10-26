import React, { Component, useEffect, useState } from 'react'

// 32. #54 – useEffect with incorrect dependency
class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <div>Class Interval: {this.state.count}</div>
    }
}

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        // function doSomething() {
        //     console.log(someProp)
        // }
        // doSomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            Hook Interval: {count}
        </div>
    )
}

function Latihan32_UseEffectDependency() {
    return (
        <div>
            <h3>32. #54 – useEffect with incorrect dependency</h3>
            <IntervalClassCounter />
            <IntervalHookCounter />
        </div>
    )
}

export default Latihan32_UseEffectDependency
