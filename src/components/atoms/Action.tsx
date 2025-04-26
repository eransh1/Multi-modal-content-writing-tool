import React from 'react'

const Action = ({ text, callback }) => {
    return (
        <button onClick={callback} className="px-3 py-1 border rounded hover:bg-gray-200">
            {text}
        </button>
    )
}

export default Action