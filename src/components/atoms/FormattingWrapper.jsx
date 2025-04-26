import React, { Children } from 'react'

const FormattingWrapper = ({ title, children }) => {
    return (
        <>
            <div className='flex flex-col gap-2 border rounded py-1 px-2'>
                <p className='text-center p-0 m-0 font-bold'>{title}</p>
                <div className='flex gap-2 items-center'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default FormattingWrapper