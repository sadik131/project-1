import React, { useEffect } from 'react'

export default function Alert({ alert, setAlert, list }) {

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return () => clearTimeout(timeOut)
  }, [list])

  return (
    <div className={`${alert.status === "success" ? "bg-[#1ab86e]" : "bg-[#b4164b]"} ${alert.status === "delete" && "bg-red-600"}  rounded-xl text-white px-2 font-bold text-center`}>
      <p>{alert.message}</p>
    </div>
  )
}
