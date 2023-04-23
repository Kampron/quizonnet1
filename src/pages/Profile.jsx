import React from 'react'
import PageMenu from '../components/Auth/PageMenu'
import UserProfile from '../components/Auth/UserProfile'

const Profile = () => {
  return (
    <div className='min-h-screen bg_img '>
        <div className='flex flex-col justify-center items-center min-h-screen py-[1rem] px-[0.5rem]'>
            <PageMenu />
            <UserProfile/>    
        </div>
        
    </div>
  )
}

export default Profile