import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        return this.state.isLoggedIn && <div>Welcome Nishant</div>
    }
    // return this.state.isLoggedIn ?
    //     <div>Welcome Nishant</div> :
    //     <div>Welcome Guest</div>

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Nishant</div>
    // }
    // else
    //     message = <div>Welcome Guest</div>
    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome Nishant
    //         </div>
    //     )
    // }
    // else
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    // return (
    //     <div>
    //         <div>Welcome Nishant</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
}

export default UserGreetings
