import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    // react doesn't render the component if state is changed directly
    // such as this.state.count = this.state.count + 1
    increaseCounter() {
        // whenever we have to update state relative to the previous
        // state, we have to pass a callback function instead of
        // passing in an object
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log(`Callback value:${this.state.count}`) })
        // whenever you have to execute a function while changing state,
        // always use a callback function inside the setState object
        // console.log(this.state.count)
        // console.log is being called before the state is actually set
        // because calls to set state are asynchronous
        // to handle such situation we can pass a callback function to setState
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }
    incrementFive() {
        this.setState((prevState) => ({
            count: prevState.count + 5
        }))
    }
    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.incrementFive()}>Increase</button>
            </div>
        )
    }
}

export default Counter
