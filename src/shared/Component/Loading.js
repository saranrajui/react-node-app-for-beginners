import React from 'react'

function Loading() {
    const style = {
        width: 3 + 'rem',
        height: 3 + 'rem'
    }
    return (
        <div className="spinner-grow" style= {style} role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )
}

export default Loading