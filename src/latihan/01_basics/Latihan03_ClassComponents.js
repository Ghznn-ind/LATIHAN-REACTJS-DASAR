import React, { Component } from 'react';

// 3. #06 – Class Components
class Welcome extends Component {
    render() {
        return <h1>Class Component</h1>
    }
}

class Latihan03_ClassComponents extends Component {
    render() {
        return (
            <div>
                <h3>3. #06 – Class Components</h3>
                <Welcome />
            </div>
        )
    }
}

export default Latihan03_ClassComponents
