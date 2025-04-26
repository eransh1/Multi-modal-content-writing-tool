import React from 'react'

const SelectOption = ({value,onChange,options}) => {
    return (
        <>
            <select
                className="border p-1 rounded"
                value={value}
                onChange={onChange}
            >
                {options.map((option) => {
                    return <option key={option.id} value={option.id}>{option.text}</option>
                })}
            </select>
        </>
    )
}

export default SelectOption