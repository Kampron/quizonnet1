import React from 'react'
import PageMenu from '../components/Auth/PageMenu'
import UserList from '../components/Auth/UserList'
import User from '../components/Auth/UserList'

const Users = () => {
  return (
    <div className='min-h-screen bg_img '>
        <div className='flex flex-col justify-center items-center min-h-screen py-[1rem] px-[0.5rem]'>
            <PageMenu />
            <UserList />
        </div>
        
    </div>
  )
}

export default Users