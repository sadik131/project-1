import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { useGlobalContex } from './Contex'
import Model from './Model'
import Sidebar from './Sidebar'
import { motion } from 'framer-motion'


export default function SidebarModel() {
    const { isOpenModel, setIsOpenModel, setIsOpenSidebar, isOpenSidebar } = useGlobalContex()

    return (
        <>
            <div className='h-screen bg-gray-300'>
                <button><GiHamburgerMenu className='text-2xl mx-4 my-4 text-blue-400' onClick={() => setIsOpenSidebar(!isOpenSidebar)} /></button>
                {
                    isOpenSidebar && <Sidebar></Sidebar>
                }
                <div>
                    <motion.button 
                    whileHover={{scale:1.1}}
                    onClick={() => setIsOpenModel(!isOpenModel)} className='btn absolute top-1/2 right-1/2 flex'>Open Model</motion.button>
                    {
                        isOpenModel && <Model></Model>
                    }
                </div>
            </div>
        </>
    )
}
