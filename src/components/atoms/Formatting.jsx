import React from 'react'
import FormattingWrapper from './FormattingWrapper'

const Formatting = ({ execCommand, title, options }) => {

    return (
        <FormattingWrapper title={title}>
            {options.map((option) => {
                return <button key={option.id} onClick={() => execCommand(option.id)} className="px-3 py-1 border rounded hover:bg-gray-200">
                    {option.text}
                </button>
            })}
        </FormattingWrapper>

    )
}

export default Formatting