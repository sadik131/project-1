import React from 'react'
import { GrFormClose } from 'react-icons/gr';
import { useGlobalContex } from './Contex';
import { motion } from 'framer-motion';


export default function Model() {

  const { isOpenModel, setIsOpenModel } = useGlobalContex()
  return (
    <div className='fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] block'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='card w-96 absolute top-1/2 right-[35%] p-4 bg-base-100'>
        <GrFormClose onClick={() => setIsOpenModel(!isOpenModel)} className='text-2xl absolute top-1 right-2' />
        <h1 className='text-center text-2xl'>Aschalamualaikum</h1>
        <p className='text-center text-xl'>Prass The Closs Icon</p>
      </motion.div>
    </div>
  )
}
