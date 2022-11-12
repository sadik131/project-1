import React from 'react'
import { links, social } from './Data'
import { GrFormClose } from 'react-icons/gr';
import { useGlobalContex } from './Contex';

export default function Sidebar() {
  const { setIsOpenSidebar, isOpenSidebar } = useGlobalContex()

  return (
    <div className='bg-white absolute z-10 top-0 delay-1000 w-96 h-full'>
      <GrFormClose onClick={() => setIsOpenSidebar(!isOpenSidebar)} className='text-2xl ml-auto mr-2 mt-2' />
      {
        links.map(item => {
          const { url, text, icon, id } = item
          return <div key={id}>
            <ul className='mt-3'>
              <li>
                <a className='text-xl m-2 flex hover:bg-blue-300 rounded-xl py-1 duration-1000  items-center' href={url}>{icon}<span className='ml-2'>{text}</span></a>
              </li>
            </ul>
          </div>
        })
      }
      <div className='flex'>
        {
          social.map(item => {
            const { id, url, icon } = item
            return <div className='m-5 bottom-auto' key={id}>
              <ul>
                <li><a className='text-2xl text-blue-400 hover:text-blue-500' href={url}>{icon}</a></li>
              </ul>
            </div>
          })
        }
      </div>
    </div>
  )
}
