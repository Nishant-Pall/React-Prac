import React from 'react'

function Columns() {
    const items = []
    return (
        // <td></td> cannot be a child of <di> tag
        // Therefore we use Fragments
        // We can use empty tags as well but limitation is
        // that we can't pass the key attribute
        <>
            <td>Name</td>
            <td>Nishant</td>
        </>
    )
}

export default Columns