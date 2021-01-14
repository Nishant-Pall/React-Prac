import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, heroName } = this.props // destructuring props
        // const { state1, state2 } = this.state // destrucuring state
        return <h1>Welcome {name} aka {heroName}</h1>
    }
}

export default Welcome