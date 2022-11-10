import React, { useState } from 'react'
import data from './data'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { ImQuotesRight } from 'react-icons/im';


export default function Reviews() {
    const [index, setIndex] = useState(0)

    if (index >= data.length) {
        return setIndex(0)
    }

    if (index < 0) {
        const datas = data.length - 1
        return setIndex(datas)
    }

    const rendomUser = () => {
        let randomUser = Math.floor(Math.random() * data.length)
        if (randomUser === index) {
            randomUser = index + 1
        }
        setIndex(randomUser)
    }

    const nextParson = () => {
        setIndex((index) => {
            let newParson = index + 1
            return newParson
        })
    }
    const prevParson = () => {
        setIndex((index) => {
            let newParson = index - 1
            return newParson
        })
    }

    const { name, job, image, text } = data[index]

    return (
        <div className='h-screen bg-orange-200 flex justify-center items-center'>
            <div className='card w-96 shadow-md flex justify-center items-center text-center bg-base-100 p-4'>
                <img className='h-20 w-20 relative top-0 ring-8 rounded-[100%] object-cover' src={image} alt={name} />
                <div className='bg-blue-500 top-3 left-[144px] rounded-[100%]  absolute p-1'>
                    <ImQuotesRight className=' text-white text-xl ' />
                </div>
                <h1 className='text-xl font-bold'>{name}</h1>
                <h1>{job}</h1>
                <p>{text}</p>
                <div className='flex justify-center items-center mt-2'>
                    <AiOutlineLeft onClick={prevParson} />
                    <button onClick={rendomUser} className='px-5 py-1 rounded-lg text-white mx-5 bg-purple-400 '>Random</button>
                    <AiOutlineRight onClick={nextParson} />
                </div>
            </div>
        </div>
    )
}
