import React, { Component } from 'react'

// 8. #12 – Destructuring props and state
const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return (
            <h1>
                Welcome {name} a.k.a {heroName}
            </h1>
        )
    }
}

function Latihan08_Destructuring() {
    return (
        <div>
            <h3>8. #12 – Destructuring props and state</h3>
            <Greet name="Diana" heroName="Wonder Woman" />
            <Welcome name="Clark" heroName="Superman" />
        </div>
    )
}

export default Latihan08_Destructuring
