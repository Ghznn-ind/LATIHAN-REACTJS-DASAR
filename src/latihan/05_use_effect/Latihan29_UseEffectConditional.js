import React, { Component, useEffect, useState } from 'react'

// 29. #51 – Conditionally run effects
class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0,
            // 29. #51 – Conditionally run effects
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        // 29. #51 – Conditionally run effects
        if (prevState.count !== this.state.count){
            console.log(`Updating document title`)
            document.title = `Clicked ${this.state.count} times`
        }
        // document.title = `Clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                {/* 29. #51 – Conditionally run effects */}
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={e => {
                        this.setState({ name: e.target.value })
                    }} 
                />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

function HookCounterOne() {
    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('')

    useEffect(() => {
        console.log(`useEffect - Updating document title`)
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            {/* 29. #51 – Conditionally run effects */}
            <input 
                type='text' 
                value={name} 
                onChange={e => setName(e.target.value)} 
            />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

function Latihan29_UseEffectConditional() {
    return (
        <div>
            <h3>29. #51 – Conditionally run effects</h3>
            <ClassCounterOne />
            <br />
            <HookCounterOne />
        </div>
    )
}

export default Latihan29_UseEffectConditional
