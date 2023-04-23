import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext' 


const input = "text-[18px] p-[0.35rem] rounded-[0.2rem] relative block focus:outline-none focus:ring-purpleColor focus:border-purpleColor focus:z-30 sm:text-sm font-medium "
const label ="mt-[1rem] text-white font-medium "

const initialState = {
  name: "QweQU",
  email: "qwequkyei@gmail.com",
  school: "",
  photo: "",
  role: "",
  isVerified: false

}

const UserProfile = () => {
    const {user} = useAuthContext()
    const [profile, setProfile] = useState(initialState)

  const handleImageChange = () => {}
  const handleInputChange = () => {}
  return (
    <>
        <section className='w-full mt-[5rem] max-w-[420px] max-h-screen flex flex-col justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]'>        
         <h1 className='text-[2rem] font-semibold text-white'>User Profile</h1>
         <div className='flex flex-col justify-center items-center'>
          <img 
            src='/avatar_2.jpeg'
            alt='avatar' 
            className='rounded-full'
          />
          <h3 className='text-white'>Role : <span className='text-purple-300'>{user && user.user.role}</span></h3>
        </div>
        <form className='flex flex-col justify-evenly grow pb-[1rem]'>

          <label className={label} htmlFor="image">
            Change Photo
          </label>
          <input 
            className={input} 
            type="file" 
            id='image'
            accept="image/*"
            onChange={handleImageChange}
          />
          <label className={label} htmlFor="username">
                  Name
          </label>
          <input
              className={input + 'bg-[#f3f3f3]'}
              type="text"
              id="username"
              autoComplete="off"
              required
              onChange={handleInputChange}
              value={profile.name}
          />

          <label className={label} htmlFor="email">
                  Email
          </label>
          <input
              className={input + 'bg-[#f3f3f3]'}
              type="email"
              id="email"
              autoComplete="off"
              onChange={handleInputChange}
              value={profile.email}
              disabled
          />

          <label className={label} htmlFor="phone">
                  School
          </label>
          <input
              className={input + 'bg-[#f3f3f3]'} 
              type="text"
              id="phone"
              autoComplete="off"
              onChange={handleInputChange}
              value={profile.school}
          />
                   
         </form>
         </section>
    </>
  )
}

export default UserProfile