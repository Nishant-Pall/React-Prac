import React from 'react'

function FragmentDemo() {
    return (
        // If we use div tag, there's another div tag created
        // that can be looked up in inspect element
        // React.Fragment prevents extra node to be added in
        // the DOM
        <React.Fragment>
            <h1>
                Fragment Demo
            </h1>
            <p>This describes the Fragment Demo component</p>
        </React.Fragment>
    )
}

export default FragmentDemo
