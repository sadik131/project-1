import React from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export default function List({ list , removeItem , editListItem}) {
  return (
    <div>
      {
        list.map((item, index) => {
          return <div key={index} className="my-2 p-1 flex justify-between">
            <h1 className="text-xl">{item.title}</h1>
            <div className='flex'>
              <AiFillEdit onClick={() =>editListItem(item.id)} className='text-xl text-[#198754]'/>
              <AiFillDelete onClick={()=>removeItem(item.id)} className='text-xl text-[#de356d]'/>
            </div>
          </div>
        })
      }
    </div>
  )
}
