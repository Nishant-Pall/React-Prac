import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp'

// There's no re-render because parentcomp extens PureComponent
// class and the states are same, therefore children components
// dont re-render as well
class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: "Nishant"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Nishant"
            })
        }, 2000)
    }

    render() {
        console.log('********************Parent Comp******************');
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
