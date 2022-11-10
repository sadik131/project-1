import React, { useState } from 'react'
import data from "./data"

export default function LoremGenerator() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  // console.log(text)
  const handelFromSubmit = (e) => {
    e.preventDefault()
    setText(data)
    let number = Number(count)
    
    // if(number <= 0){
    //   console.log("first")
    //    number = 1
    // }
    const texts = text.slice(0, number)
    setText(texts)
  }

  return (
    <div className='h-full bg-gray-300'>
      <h1 className='text-2xl font-semibold py-5 text-center '>Are you bored about Generate lorem</h1>
      <form className='flex justify-center' onSubmit={handelFromSubmit}>
        <label>Paragraps : </label>
        <input type="number" className='ml-1' name='number' value={count} onChange={(e) => setCount(e.target.value)} />
        <button type='submit' className='bg-pink-500 rounded-md ml-3 px-4 font-bold text-white '>Generate</button>
      </form>
      {text.map((text, index) => {
        return <p className='px-5 py-5' key={index}>{text}</p>
      })}
    </div>
  )
}
