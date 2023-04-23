import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import RegisterUser from '../components/Auth/RegisterUser'

const Register = () => {
  return (
    <div className='min-h-screen bg_img '>
        <div className='flex flex-col justify-center items-center min-h-screen py-[1rem] px-[0.5rem]'>
            <HelmetProvider >
              <Helmet><title>Quizonnet | Register </title></Helmet>
            </HelmetProvider>
            <RegisterUser />
        </div>
        
    </div>
  )
}

export default Register