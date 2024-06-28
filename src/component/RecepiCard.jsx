import React from 'react'

const RecepiCard = ({newitem}) => {
  console.log(newitem)
  return (
    <div className='w-60 h-96 bg-slate-300 text-teal-900 overflow-hidden' >
      <div>title:{newitem.title}</div>
      <br />
      <div>ingredients:</div>
      <div>{newitem.ingredients}</div>
         <br />
         <div>instruction:</div>
      <div>{newitem.instruction}</div>
    </div>
  )
}

export default RecepiCard
