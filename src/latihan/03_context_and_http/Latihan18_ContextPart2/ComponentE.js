import React, { Component } from 'react'
import ComponentF from './ComponentF'

class ComponentE extends Component {
    render() {
        return (
            <div>
                <div>Component E</div>
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE
