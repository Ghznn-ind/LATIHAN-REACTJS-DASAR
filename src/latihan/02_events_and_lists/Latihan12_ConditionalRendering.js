import React, { Component } from 'react'

// 12. #16 – Conditional Rendering
class UserGreeting extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        // return this.state.isLoggedIn && <div>Welcome Ghozian</div> 

        return this.state.isLoggedIn ? (
            <div>Welcome Ghozian</div> 
        ): (
            <div>Welcome Guest</div>
        )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Ghozian</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Ghozian
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome Ghozian</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

function Latihan12_ConditionalRendering() {
    return (
        <div>
            <h3>12. #16 – Conditional Rendering</h3>
            <UserGreeting />
        </div>
    )
}

export default Latihan12_ConditionalRendering
