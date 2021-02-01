import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Nishant'
        }
        console.log('LifeCycleA constructor');
    }

    // Method is called every time a component is re-rendered
    // Either returns null or an object that represents updated
    // state of the component
    // Used when state depends on the props of the component
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    // Receives updated props and state
    // Dictates should the component re-render or not
    // It can prevent method that causes re-rendering of component
    // everytime props or the state changes for performance optimization
    // We can compare existing and next props and state values
    // and return true or false letting react know whether to
    // update the component or not
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    // Called right before the changes from virtual DOM are to 
    // be reflected in the DOM
    // Used to capture info from DOM, example scroll position
    // returns a value or null
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    // Called after the render is finished in the re-render cycles
    // We can make ajax calls in it
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('LifecyleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
