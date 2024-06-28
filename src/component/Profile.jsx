import React from 'react'
import ProfileCard from './ProfileCard'
import data from './DataProfile'

const Profile = () => {

  return (
    <div className='flex gap-2'>
       { data.map((data,index) => (
            <ProfileCard data={data}/>
        ))}
   
    </div>
  )
}

export default Profile
