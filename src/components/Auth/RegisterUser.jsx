import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { useSignup } from '../../hooks/useSignup'
import { Bars } from  'react-loader-spinner'



const input = "text-[15px] p-[0.35rem] rounded-[0.2rem] relative block focus:outline-none focus:ring-purpleColor focus:border-purpleColor focus:z-30 sm:text-sm"
const label ="mt-[1rem] text-white"
const instructions = "text-[0.7rem] rounded-[0.5rem] bg-[#000] text-[#fff] p-[0.25rem] relative bottom-[-10px]"
const offscreen = "absolute left-[-999px]"
const hide = "hidden"
const valid = "ml-0.25rem"
const invalid = "ml-0.25rem"
const errmsg = "bg-[lightpink] text-[firebrick] font-[bold] p-[0.5rem] mb-[0.5rem] "


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;/^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register'

const Register = () => {
    const {signup, error, isLoading} = useSignup()
    const userRef = useRef()
    const emailRef = useRef()
    const errRef = useRef()

    const [username, setUsername] = useState("")
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState("")
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [username, email, password, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(username, email, password)
    }

  return (
            <>
                {isLoading ? (
                    <section className='w-full max-w-[420px] max-h-[540px] flex flex-col justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]' >
                        <Bars
                        height="80"
                        width="80"
                        color="#fff"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass="flex justify-center items-center"
                        visible={true}
                        />
                    </section>
                ) : (
                    <section className='w-full max-w-[420px] max-h-[540px] flex flex-col justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px]'>
            <p ref={errRef} className={error ? errmsg : offscreen} aria-live="assertive">{error}</p>
            <h1 className='text-[2rem] font-semibold text-white'>Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow pb-[1rem] '>
                <label className={label} htmlFor="username">
                    Username
                    <span className={validName ? valid : hide }>
                        <GiCheckMark color="limegreen" className='inline ml-[0.30rem]' />
                    </span>
                    <span className={validName || !username ? hide : invalid}>
                        <FaTimes color="red" className='inline ml-[0.30rem]' />
                    </span>
                </label>
                <input
                    className={input}
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && username && !validName ? instructions : offscreen}>
                    <BsInfoCircleFill className='inline mr-[0.35rem]' />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

                <label className={label} htmlFor="email">
                    Email
                </label>
                <input
                    className={input}
                    type="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                />
                
                <label className={label}  htmlFor="password">
                    Password
                    <span className={validPwd ? valid : hide }>
                        <GiCheckMark color="limegreen" className='inline ml-[0.30rem]' />
                    </span>
                    <span className={validPwd || !password ? hide : invalid}>
                        <FaTimes color="red" className='inline ml-[0.30rem]' />
                    </span>
                </label>
                
                    <input
                        className={input}
                        type='password'
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? instructions : offscreen }>
                        <BsInfoCircleFill className='inline mr-[0.35rem]' />
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>

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
                    <button className="text-[15px] p-[0.5rem] rounded-[0.2rem] mt-[1rem] bg-purpleColor text-white cursor-pointer disabled:bg-purple-400" disabled={!validName || !validPwd || !validMatch ? true : false}>Register</button>
                    <p className='text-white'>
                        Already registered ?<br />
                        <span className='text-white hover:text-purple-400 font-medium'>
                            {/*put router link here*/}
                            <a className=' cursor-pointer' href="/login">Sign In</a>
                        </span>
                    </p>
            </form>
        </section>
                )}
            </>
        )
    }

export default Register