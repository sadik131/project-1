import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import Tour from './Tour'
const url = "https://course-api.com/react-tours-project"

export default function Tours() {

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)


  const deleteTour = (id) => {
    const newToure = tours.filter((tour) => tour.id !== id)
    setTours(newToure)
  }

  const fetchdata = () => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => setTours(data))
    setLoading(false)

  } 
  useEffect(() => {
    fetchdata()
  }, [])

  if (loading) {
    return <Loading></Loading>
  }

  if (tours.length === 0) {
    return <div className='bg-blue-500 flex justify-center items-center'>
      <h1 className='text-2xl'>No More Toure Left</h1>
      <button className='btn' onClick={fetchdata}>Refresh</button>
    </div>
  }


  return (
    <div className='bg-blue-500 flex justify-center items-center'>
      <div className='block'>
        {
          tours.map((tour, index) => <Tour key={index} deleteTour={deleteTour} tour={tour}></Tour>)
        }
      </div>
    </div>
  )
}
