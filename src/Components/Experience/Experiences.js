import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import { FaAngleDoubleRight } from 'react-icons/fa'


export default function Experiences() {
    const [jobs, setjobs] = useState([])
    const [number, setNumber] = useState(0)
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setloading(true)
        fetch("https://course-api.com/react-tabs-project")
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setloading(false)
                    setjobs(data)
                }
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    const { company, dates, title, duties } = jobs[number]
    
    return (
        <div className='h-screen py-5'>
            <h1 className='text-3xl text-center font-bold'>Experience</h1>
            <div className='h-1 bg-[#2caeba] w-20 flex mt-2 ml-[470px]'></div>
             <div className='flex'>
                <div className='w-[30%]'>
                    {
                        jobs.map((job , index)=>{
                            // let active;
                            // console.log(active)
                            // if(index === number){
                            //     active = "text-[#2caeba]"
                            //     return active
                            // }
                            return <button className={`block text-xl w-24 outline-none ml-16 py-4 mt-4`} key={index} onClick={() =>setNumber(index)}>{job.company}</button>
                        })
                    }
                </div>
                <div className='w-[70%]'>
                    <h1 className='text-3xl font-medium mt-5'>{title}</h1>
                    <h1 className='bg-[#dae2ec] inline-block p-2 text-[#617d98] font-medium rounded-sm my-2'>{company}</h1>
                    <h1 className='my-2 text-xl '>{dates}</h1>
                    {
                        duties.map((dutie ,index)=>{
                        return <div key={index} className="flex justify-center items-center ">
                            <FaAngleDoubleRight  className='text-2xl text-[#2caeba]'/>
                            <p className='ml-4'>{dutie}</p>
                        </div>
                        })
                    }
                </div>
            </div> 
        </div>
    )
}
