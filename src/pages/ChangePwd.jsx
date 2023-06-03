import React from 'react'
import Changepwdd from '../components/Auth/Changepwdd'
import PageMenu from '../components/Auth/PageMenu'

const ChangePwd = () => {
  return (
    <div className='min-h-screen bg_img '>
        <div className='flex flex-col justify-center items-center min-h-screen py-[1rem] px-[0.5rem]'>
            <PageMenu />
            <Changepwdd />
        </div>
        
    </div>
  )
}

export default ChangePwd