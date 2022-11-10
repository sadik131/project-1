import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

export default function Collapse({ question }) {

    const [collapse, setCollapse] = useState(false)
    const { title, info, id } = question
    return (
        <div key={id} className="card shadow-xl flex bg-base-100 m-10 p-7">
            <div className='flex'>
                <h1 className='w-[90%]'>{title}</h1>
                <button onClick={() => setCollapse(!collapse)} className='w-[5%] outline-none'>
                    {collapse ?
                        <AiFillMinusCircle className='text-[#dd1c56] w-8 h-6' />
                        :
                        <AiFillPlusCircle className='text-[#dd1c56] w-8 h-6' />
                    }
                </button>
            </div>
            {collapse &&
                <p className='mt-5'>{info}</p>
            }
        </div>
    )
}
