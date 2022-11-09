import React, { useEffect, useState } from 'react'
import data from "../../data"

export default function Birthday() {

    const [birthday, setBirthday] = useState(data)

    return (
        <div className='flex justify-center items-center h-screen bg-slate-300'>
            <div className="card w-96 bg-base-100 shadow-2xl p-5">
                <h1 className='text-xl'>Total Birthday {birthday.length}</h1>
                {
                    birthday.map(user => {
                        return <div className='flex mt-3'>
                            <img className='w-14 object-cover rounded-[100%] ' src={user.image} alt="" />
                            <div className='ml-4'>
                                <h1 className='text-xl font-semibold'>{user.name}</h1>
                                <p>{user.age}</p>
                            </div>
                        </div>
                    })
                }
                <button onClick={()=>setBirthday([])} className='btn mt-3 bg-purple-400 
                hover:bg-purple-500 border-none'>clear all</button>
            </div>
        </div>
    )
}
