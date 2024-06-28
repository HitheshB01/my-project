import React, { useState } from 'react'
import RecepiForm from './RecepiForm'
import RecepiCard from './RecepiCard'

const Recepi = () => {
const [addrecepi,setAddrecepi]=useState([])

const getrecepi=(getrecepi)=>{
  setAddrecepi([...addrecepi,getrecepi])
}
console.log(addrecepi)

  return (
    <div className='p-1 bg-emerald-700 text-indigo-900'>
      <RecepiForm getrecepi={getrecepi}/>
      <div className='flex gap-3'>
      {addrecepi.map((item)=>{
        return <RecepiCard newitem={item} />

      })}
      </div>
    </div>
  )
}

export default Recepi
