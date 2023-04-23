import React from 'react'
import { useRef, useState, useEffect } from 'react'

const input = "text-[15px] p-[0.35rem] rounded-[0.2rem] relative block focus:outline-none focus:ring-purpleColor focus:border-purpleColor focus:z-30 sm:text-sm"
const label ="mt-[1rem] text-white"

const LoginWithCode = () => {
     const accessCodeRef = useRef()

     const [accesscode, setAccesscode] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
    }

    useEffect(() => {
        accessCodeRef.current.focus();
    }, [])


  return (
    <section className='w-full max-w-[420px] max-h-[540px] flex flex-col justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]'>
        <h1 className='text-[2rem] font-semibold text-white'>Enter Access Code</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow pb-[1rem] '>
             <label htmlFor='accessCode' className={label}>Code has been sent to your email</label>
            <input 
                className={input}
                type="text"
                id="accessCode"
                placeholder='Enter Code'
                ref={accessCodeRef}
                autoComplete="off"
                onChange={(e) => setAccesscode(e.target.value)}
                value={accesscode}
                required
                />
                <button  className="text-[15px] p-[0.5rem] rounded-[0.2rem] mt-[1rem] bg-purpleColor text-white cursor-pointer disabled:bg-purple-400" disabled={!accesscode ? true : false}>Submit</button>
        </form>

         <div className='text-white flex justify-between p-[1rem]'>
            <span className='text-white hover:text-purple-400 font-medium'>
                <a href="/">Home</a>
            </span> 
            <span className='text-white hover:text-purple-400 font-medium'>
                <a href="#">Resend Code</a>
            </span>     
        </div>
    </section>
  )
}

export default LoginWithCode