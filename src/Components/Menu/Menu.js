import React, { useState } from 'react'
import data from "./data"
import Nav from './Nav'

export default function Menu() {
  const [menu , setMenu] = useState(data)
    
  const allCategory = ["all" ,...new Set( data.map(item => item.category))]

  const filterItem = (category) =>{
    const newitem = data.filter(item=>item.category == category)
    setMenu(newitem)
    console.log(setMenu)

    if(category === "all"){
      setMenu(data)
    }
  }
  

  return (
    <div className='h-full bg-slate-200	'>
      <h1 className='text-2xl font-bold text-center pt-10'>Our Menu</h1>
      <div className='h-1 bg-orange-500	w-16 flex ml-[480px]'></div>
      <Nav allCategory={allCategory} filter={filterItem}></Nav>
      <div className='grid grid-cols-1 lg:grid-cols-2 p-4'>
        {
          menu.map((item, index) => {
            const { title, price, desc, img } = item
            return <div key={index} className="card w-[45%] m-5">
              <div className='flex'>
                <img className='h-[200px] w-[150px]' src={img} alt="" />
                <div className='ml-5'>
                  <div className='flex'>
                  <h1 className='text-xl font-bold'>{title}</h1>
                  <h1 className='text-xxl font-bold ml-12 text-orange-400'>${price}</h1>
                  </div>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
