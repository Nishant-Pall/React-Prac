import React, { PureComponent } from 'react'

// A pure component on the other hand implements 
// shouldComponentUpdate with a shallow props and state comparison
// Shallow comparison returns true if two complex types refer to 
// the exact same object, else it returns false
// In our case, we use "Nishant", which is primitive and is the same
// i.e. it's like ====, and hence shouldComponentUpdate returns
// false, because there's no change in state

// Never mutate objects or arrays in state because the reference
// remains the same hence, the component doesn't re-render. 
// Always return a new object that reflects the new state.

class PureComp extends PureComponent {
    render() {
        console.log('Pure Comp Render');
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComp
