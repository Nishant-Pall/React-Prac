import React, { Component } from 'react'

// A regular component does not implement the shouldComponentUpdate
// method, it always returns true by default
class RegComp extends Component {
    render() {
        console.log('Reg Comp')
        return (
            <div >
                Regular Component { this.props.name}
            </div>
        )
    }
}

export default RegComp
