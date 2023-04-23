import React from 'react'
const input = "text-[15px] p-[0.35rem] rounded-[0.2rem] relative block focus:outline-none focus:ring-purpleColor focus:border-purpleColor focus:z-30 sm:text-sm"
const label ="mt-[1rem] text-white"


const VerifyEmail = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        
    }

  return (
    <section className='w-full max-w-[420px] max-h-[540px] flex flex-col justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]'>
        <h1 className='flex justify-center 
         text-[1.3rem] sm:text-[2rem] font-semibold text-white'>Account Verification</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow pb-[1rem] '>
            <p className='flex justify-center text-[0.7rem] text-purple-300'>Click on the Button to verify your account</p>
            <div className='flex justify-center items-center'>
              <button className='bg-white text-purpleColor h-[1.8rem] sm:h-[2rem] w-full min-[320px]:w-1/2 rounded-sm mt-[1rem] font-medium'>Verify Account</button>
            </div>
            
        </form>
    </section>
  )
}

export default VerifyEmail