import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import LoginUser from '../components/Auth/LoginUser'

const Login = () => {
  return (
    <div className='min-h-screen bg_img '>
        <div className='flex flex-col justify-center items-center min-h-screen py-[1rem] px-[0.5rem]'>
          <HelmetProvider >
            <Helmet><title>Quizonnet | Login </title></Helmet>
          </HelmetProvider>
            <LoginUser />
        </div>
        
    </div>
  )
}

export default Login