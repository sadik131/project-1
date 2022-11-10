import React from 'react'
import Collapse from './Collapse'
import data from './data'

export default function Question() {

  return (
    <div className='h-auto py-3 bg-pink-600 '>
      <h1 className='text-center text-3xl text-white'>Question And Answers about Login</h1>
      {
        data.map(question => <Collapse key={question.id} question={question}></Collapse>)
      }
    </div>
  )}
