import React, {  useState } from 'react'
import data from "../../data"
import { motion } from 'framer-motion'

export default function Birthday() {

    const [birthday, setBirthday] = useState(data)

    return (
        <div className='flex justify-center items-center h-screen bg-slate-300'>
            <motion.div 
            initial={{x:"-100vw"}}
            animate={{x:0}}
            transition={{delay:0.2 ,duration:0.5 , type:'spring'}}
            className="card w-96 bg-base-100 shadow-2xl p-5">
                <h1 className='text-xl'>Total Birthday {birthday.length}</h1>
                {
                    birthday.map(user => {
                        return <div key={user.id} className='flex mt-3'>
                            <img className='w-14 object-cover rounded-[100%] ' src={user.image} alt="" />
                            <div className='ml-4'>
                                <h1 className='text-xl font-semibold'>{user.name}</h1>
                                <p>{user.age}</p>
                            </div>
                        </div>
                    })
                }
                {birthday.length ? <button onClick={() => setBirthday([])} className='btn mt-3 bg-purple-400 
                hover:bg-purple-500 border-none'>clear all</button>
            :
            <h1 className='text-xl text-center'>Don't have any data</h1>
            }
            </motion.div>
        </div>
    )
}
