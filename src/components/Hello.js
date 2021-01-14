import React from 'react'

const Hello = () => {
    return (
        <div className='dummyClass'>
            <h1>Hello Nishant</h1>
        </div>
    )

    // React.createElement(
    //     'div',
    //     { id: 'hello', className: 'dummyClass' },
    //     React.createElement('h1', null, 'Hello Nishant')
    // )
}

export default Hello