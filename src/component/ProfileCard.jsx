import React from 'react'

const ProfileCard = ({data}) => {
  
  return (
    <div>
       <div className='p-1 h-72 w-52 bg-slate-800 flex items-center justify-center flex-col text-zinc-100'>
        <div className='p-1 bg-slate-300 h-20 w-20'>{data.image}</div>
        <div >hithu</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptas.</div>
      </div>
    </div>
  )
}

export default ProfileCard
