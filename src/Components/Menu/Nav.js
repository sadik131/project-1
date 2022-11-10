import React from 'react'

export default function Nav({filter , allCategory}) {
  // if()

  // console.log(allCategory)
    return (
    <div className='justify-center flex'>
      {allCategory.map((item ,index) =>{
        return <button className='p-3 text-yellow-700 hover:text-yellow-600 ' key={index} onClick={() =>filter(item)}>{item}</button>
      })}
        
    </div>
  )
}
