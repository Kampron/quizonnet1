import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Bars } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin'


const input = "text-[15px] p-[0.35rem] rounded-[0.2rem] relative block focus:outline-none focus:ring-purpleColor focus:border-purpleColor focus:z-30 sm:text-sm"
const label ="mt-[1rem] text-white"
const offscreen = "absolute left-[-999px]"
const errmsg = "bg-[lightpink] text-[firebrick] font-[bold] p-[0.5rem] mb-[0.5rem] "

const LoginUser = () => {
    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const {login, isLoading, error} = useLogin()

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

     const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

  return (
    <>
       {isLoading ? (
      <section className='w-full max-w-[420px] max-h-[540px] flex flex-col justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]' >
                        <Bars
                        height="80"
                        width="40"
                        color="#fff"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass="flex justify-center items-center"
                        visible={true}
                        />
                    </section>
    ) : (
      <section className='w-full max-w-[420px] max-h-[450px] flex flex-col justify-center p-[2.5rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]'>
        <p ref={errRef} className={error ? errmsg : offscreen} aria-live="assertive">{error}</p>
        <h1 className='text-[2rem] font-semibold text-white'>Sign In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow pb-[1rem] '>
            <label htmlFor='email' className={label}>Email</label>
            <input 
                 className={input}
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            <label htmlFor='password'className={label}>Password</label>
            <input 
                 className={input}
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
            <button  className="text-[15px] p-[0.5rem] rounded-[0.2rem] mt-[1rem] bg-purpleColor text-white cursor-pointer disabled:bg-purple-400" disabled={!email || !password ? true : false}>Sign In</button>
        </form>

        <div className="text-sm">
          <Link to="/forgotpwd" className="font-medium text-white hover:text-purple-400">
            Forgot your password?
          </Link>
        </div>
        
        <div className='mt-1 grid grid-cols-3 items-center text-gray-500'>
            <hr className='border-gray-800'/> 
            <p className='text-center text-gray-800'>OR</p>
            <hr className='border-gray-800'/>
          </div>
          <button className='bg-white border py-1 w-full rounded-sm text-sm'> <img src='/google-icon.svg' alt="google" className='inline mr-3'/>
                    Login with Google
           </button>
        <p className='text-white'>
            Need an account ?<br/>
            <span className='text-white hover:text-purple-400 font-medium'>
                <a href="/register">Register</a>
            </span>     
        </p>
    </section>
    )}
    </>
  )
}

export default LoginUser