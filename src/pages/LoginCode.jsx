import React from 'react'
import LoginWithCode from '../components/Auth/LoginWithCode'

const LoginCode = () => {
  return (
    <div className='min-h-screen bg_img '>
        <div className='flex flex-col justify-center items-center min-h-screen py-[1rem] px-[0.5rem]'>
            <LoginWithCode />
        </div>
        
    </div>
  )
}

export default LoginCode