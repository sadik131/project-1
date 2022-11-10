import React, { useEffect, useState } from 'react'

export default function SingelColor({ singelColor ,index }) {
    const [alert , setAlert] = useState(false)
    const { rgb, hex, weight } = singelColor
    const rgbColor = rgb.join(",")
    const hexValue = `#${hex}`

    const handelCopy = () =>{
        navigator.clipboard.writeText(hexValue)
        setAlert(true)
    }

    useEffect(() =>{
        const timeOut = setTimeout(() => {
            setAlert(false)
        }, 2000);
        return ()=>clearTimeout(timeOut)
    },[alert])

    return (
        <div onClick={handelCopy} style={{background:`rgb(${rgbColor})`}} className={` h-32 w-[142px] ${index > 10 && "text-white"}`}>
            <h1 className='text-xl font-normal ml-2'>{hexValue}</h1>
            <h1 className='text-xl font-normal ml-2'>{weight}</h1>
            {alert && <p>Copy to clickbord</p>}
        </div>
    )
}
