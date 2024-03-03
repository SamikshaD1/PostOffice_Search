import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

function ButtonPage() {
    const [pincode, setpincode] = useState(null)
    const navigate = useNavigate();

    const handleClick = () => {
        if (pincode && /^\d{6}$/.test(pincode)) {
            localStorage.setItem('pincode', pincode);
            navigate('/details');
        } else {
            toast.error('Please enter a valid 6-digit pincode')
        }
    }

    return (
        <div className='h-screen  bg-gray-200 w-full flex flex-col p-4 gap-5'>
            <h1 className='text-2xl font-bold'>Enter Pincode</h1>
            <input type='text' onChange={(e) => setpincode(e.target.value)} placeholder='Enter Pincode' className='px-4 py-3 rounded-md border-2 border-black placeholder:text-black placeholder:font-bold placeholder:text-xl' />
            <button onClick={handleClick} className='bg-black text-white rounded-sm items-center px-4 w-[20%] text-xs sm:text-xl py-2'>Lookup</button>
        </div>
    )
}

export default ButtonPage