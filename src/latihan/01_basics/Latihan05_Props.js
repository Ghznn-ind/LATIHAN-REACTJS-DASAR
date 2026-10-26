import React, { Component } from 'react'

// 5. #09 – Props
const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}

class Welcome extends Component {
    render() {
        return (
            <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
        )
    }
}

function Latihan05_Props() {
    return (
        <div>
            <h3>5. #09 – Props</h3>
            <Greet name="Bruce" heroName="Batman">
                <p>This is children props</p>
            </Greet>
            <Greet name="Clark" heroName="Superman">
                <button>Action</button>
            </Greet>
            <Greet name="Diana" heroName="Wonder Woman" />
            <Welcome name="Bruce" heroName="Batman" />
            <Welcome name="Clark" heroName="Superman" />
            <Welcome name="Diana" heroName="Wonder Woman" />
        </div>
    )
}

export default Latihan05_Props
