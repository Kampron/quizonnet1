import React from 'react'
import Changepwd from '../components/Auth/ChangePwd'
import PageMenu from '../components/Auth/PageMenu'

const ChangePwd = () => {
  return (
    <div className='min-h-screen bg_img '>
        <div className='flex flex-col justify-center items-center min-h-screen py-[1rem] px-[0.5rem]'>
            <PageMenu />
            <Changepwd />
        </div>
        
    </div>
  )
}

export default ChangePwd