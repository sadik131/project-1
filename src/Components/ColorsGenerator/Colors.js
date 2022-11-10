import React, { useState } from 'react'
import Values from 'values.js'
import SingelColor from './SingelColor'


export default function Colors() {
    const [color, setColor] = useState("")
    const [list, setList] = useState([])
    const [error, setError] = useState(false)
    const handelSubmit = (e) => {
        console.log(color)
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
        } catch (error) {
            setError(true)
        }
    }
    return (
        <div className='h-screen py-4'>
            <div className='flex align-center'>

                <h1 className='text-2xl font-bold inline-block'>Color Generator</h1>
                <form onSubmit={handelSubmit} className="ml-2 mt-2">
                    <input type="text" name='color' className="input-primary " onChange={(e) => setColor(e.target.value)} placeholder='#f15025' />
                    <button className='bg-purple-500 py-1 px-1 text-white rounded-md' type='submit'>Genarate</button>
                </form>
            </div>
            <div className='flex flex-wrap'>
                {
                    list.map((singelColor, index) => <SingelColor key={index} index={index} singelColor={singelColor}></SingelColor>)
                }
            </div>
        </div>
    )
}
