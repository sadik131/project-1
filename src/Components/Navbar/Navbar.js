import React, { useState } from 'react'
import { links, social } from "./data"
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false)
    return (
        <nav className='h-screen bg-base-100'>
            <div className='md:block lg:flex-row h-10 p-2 bg-base-200 lg:flex justify-between item center'>
                <div className="flex justify-between">

                    <h1 className='text-xl flex'>Coading <span className='ml-1 text-blue-300'> Addiction</span></h1>
                    <div className='lg:hidden mt-1'><GiHamburgerMenu className={`${openNav ? "origin-center rotate-90 duration-1000	" : "duration-1000	"}`} onClick={() => setOpenNav(!openNav)} /></div>
                </div>
                <div className='block lg:pl-20 ml-[-8px] w-[104%] bg-gray-300 lg:bg-base-200'>
                    <ul className={`${openNav ? "block " : "hidden"} lg:flex`}>
                        {links.map(link => <li key={link.id}>
                            <a className='m-2 text-xl' href={link.url}>{link.text}</a>
                        </li>)}
                    </ul>
                </div>
                <ul transition={{ duration: 3, delay: 0.2 }}
                    className='hidden lg:flex text-2xl text-blue-500 '>
                    <li><a href='https://www.facebook.com'><FaFacebook /></a></li>
                    <li><a href='https://www.facebook.com'><FaLinkedin /></a></li>
                    <li><a href='https://www.facebook.com'><FaBehance /></a></li>
                    <li><a href='https://www.facebook.com'>< FaTwitter /></a></li>
                </ul>
            </div>
        </nav>
    )
}
