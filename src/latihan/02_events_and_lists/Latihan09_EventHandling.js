import React, { Component } from 'react'

// 9. #13 – Event Handling
function FunctionClick() {
    function clickHandler(){
        console.log('Button Clicked')
    }
    
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

class ClassClick extends Component {
    clickHandler() {
        console.log('Clicked the button')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

function Latihan09_EventHandling() {
    return (
        <div>
            <h3>9. #13 – Event Handling</h3>
            <FunctionClick />
            <ClassClick />
        </div>
    )
}

export default Latihan09_EventHandling
