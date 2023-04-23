import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

const input = "text-[15px] p-[0.35rem] rounded-[0.2rem] relative block focus:outline-none focus:ring-purpleColor focus:border-purpleColor focus:z-30 sm:text-sm"
const label ="mt-[1rem] text-white"
const instructions = "text-[0.7rem] rounded-[0.5rem] bg-[#000] text-[#fff] p-[0.25rem] relative bottom-[-10px]"
const offscreen = "absolute left-[-999px]"
const hide = "hidden"
const valid = "ml-0.25rem"
const invalid = "ml-0.25rem"
const errmsg = "bg-[lightpink] text-[firebrick] font-[bold] p-[0.5rem] mb-[0.5rem] "

const Resetpwd = () => {

   const [pwd, setPwd] = useState('');
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    useEffect(() => {
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

  return (
    <section  className='w-full max-w-[420px] max-h-[540px] flex flex-col justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]'>
      <h1 className='text-[2rem] font-semibold text-white'>Enter New Password</h1>
      <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow pb-[1rem] '>
         <label className={label}  htmlFor="password">
            Password
        </label>
                
        <input
            className={input}
            type='password'
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
        />


        <label className={label}  htmlFor="confirm_pwd">
            Confirm Password
            <span className={validMatch && matchPwd ? valid : hide}>
            <GiCheckMark color="limegreen" className='inline ml-[0.30rem]' />
            </span>
            <span className={validMatch || !matchPwd ? hide : invalid}>
                <FaTimes color="red" className='inline ml-[0.30rem]' />
            </span>
        </label>
        <input
            className={input}
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
        />
        <p id="confirmnote" className={matchFocus && !validMatch ? instructions : offscreen}>
            <BsInfoCircleFill className='inline mr-[0.35rem]' />
            Must match the first password input field.
        </p>

        <button  className="text-[15px] p-[0.5rem] rounded-[0.2rem] mt-[1rem] bg-purpleColor text-white cursor-pointer disabled:bg-purple-400" disabled={!pwd || !matchPwd || !validMatch ? true : false}>Submit</button>

      </form>
    </section>
  )
}

export default Resetpwd