import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='h-screen w-full flex flex-col gap-4 bg-black text-white font-semibold items-center justify-center'>
            <h1 className='text-4xl sm:text-9xl'>404 ERROR</h1>
            <Link to={"/"} className='bg-yellow-300 text-black text-xl rounded-md font-semibold sm:text-4xl px-3 py-2'>Home</Link>
        </div>
    )
}

export default ErrorPage