import React from 'react'
import { useRef, useState, useEffect } from 'react'

const input = "text-[15px] p-[0.35rem] rounded-[0.2rem] relative block focus:outline-none focus:ring-purpleColor focus:border-purpleColor focus:z-30 sm:text-sm"
const label ="mt-[1rem] text-white"
const offscreen = "absolute left-[-999px]"
const errmsg = "bg-[lightpink] text-[firebrick] font-[bold] p-[0.5rem] mb-[0.5rem] "

const ForgottenPwd = () => {

  const emailRef = useRef()
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        emailRef.current.focus();
    }, [])

  return (
    <section  className='w-full max-w-[420px] max-h-[450px] flex flex-col justify-center p-[2.5rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]'>
       <h1 className='text-[2rem] font-semibold text-white'>Forgotten Password?</h1>
      <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow pb-[1rem]'>
        <label htmlFor='email' className={label}>You'll get an email with a reset link</label>
            <input 
                 className={input}
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            <button  className="text-[15px] p-[0.5rem] rounded-[0.2rem] mt-[1rem] bg-purpleColor text-white cursor-pointer disabled:bg-purple-400" disabled={!email ? true : false}>Sign Up</button>
      </form>

    </section>
  )
}

export default ForgottenPwd