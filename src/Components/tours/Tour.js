import React, { useState } from 'react'

export default function Tour({ tour, deleteTour }) {

    const [text, setText] = useState(true)

    const { id, name, info, price, image } = tour
    return (
        <div className="card w-96 m-4 bg-base-100 shadow-2xl p-5">
            <img className='h-56 object-cover' src={image} alt="" />
            <h1>{name}</h1>
            <p>{
                text ? `${info.substr(0, 100)}` :
                    info
            }
                {text ?
                    <button className='text-blue-600 font-bold border-none' onClick={() => setText(!text)}> Read more..</button>
                    :
                    <button className='text-blue-600 font-bold border-none' onClick={() => setText(!text)}> less..</button>}
            </p>
            <h1 className='text-xl txt-orange-300 font-bold '>${price}</h1>
            <button onClick={() => deleteTour(id)} className='btn bg-purple-400 hover:bg-purple-500 border-none'>Delete Toure</button>
        </div>
    )
}
