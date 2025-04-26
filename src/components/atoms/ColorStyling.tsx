import React from 'react'

const ColorStyling = ({ execCommand,execName, title,inputTitle }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <p className="text-center">{title}</p>
                <input
                    type="color"
                    onChange={(e) => execCommand(execName, e.target.value)}
                    className="w-full h-8 rounded-2xl overflow-hidden"
                    title={inputTitle}
                />
            </div>
        </>
    )
}

export default ColorStyling