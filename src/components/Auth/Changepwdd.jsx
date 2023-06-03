import React, { useState } from 'react'

const input = "text-[18px] p-[0.35rem] rounded-[0.2rem] relative block focus:outline-none focus:ring-purpleColor focus:border-purpleColor focus:z-30 sm:text-sm font-medium "
const label ="mt-[1rem] text-white font-medium "

const initialState = {
  currentPwd: "",
  newPwd: "",
  confirmPwd: "",
}

const Changepwdd = () => {
  const [formData, setFormData] = useState(initialState)

  const { currentPwd, newPwd, confirmPwd } = formData

  const handleInputChange = () => {}

  return (
    <section className='w-full max-w-[420px] max-h-screen flex flex-col justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]'>
        <h1 className='text-[2rem] font-semibold text-white'>Change Password</h1>
        <form className='flex flex-col justify-evenly grow pb-[1rem]'>
             <label className="mt-[1rem] text-purpleColor font-medium " htmlFor="currentPwd">
           Current Password
          </label>
          <input 
            className={input + 'bg-[#f3f3f3]'}
            type="password" 
            id='currentPwd'
            value={currentPwd}
            onChange={handleInputChange}
            disabled
          />
          <label className={label} htmlFor="newPwd">
                  New Password
          </label>
          <input
              className={input + 'bg-[#f3f3f3]'}
              type="password"
              id="newPwd"
              required
              onChange={handleInputChange}
              value={newPwd}
          />

          <label className={label} htmlFor="confirmPwd">
                  Confirm Password
          </label>
          <input
              className={input + 'bg-[#f3f3f3]'}
              type="email"
              id="confirmPwd"
              onChange={handleInputChange}
              value={confirmPwd}
          />
        </form>
    </section>
  )
}

export default Changepwdd