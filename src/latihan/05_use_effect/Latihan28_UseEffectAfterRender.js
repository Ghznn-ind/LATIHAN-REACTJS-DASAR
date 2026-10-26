import React, { Component, useState, useEffect } from 'react'

// 28. #50 – useEffect after render
class ClassCounterOneBasic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Class Click {this.state.count} times
                </button>
            </div>
        )
    }
}

function HookCounterOneBasic() {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Hook Click {count} times</button>
        </div>
    )
}

function Latihan28_UseEffectAfterRender() {
    return (
        <div>
            <h3>28. #50 – useEffect after render</h3>
            <ClassCounterOneBasic />
            <HookCounterOneBasic />
        </div>
    )
}

export default Latihan28_UseEffectAfterRender
