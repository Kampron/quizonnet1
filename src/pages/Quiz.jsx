import React from 'react'
import Footer from '../components/Home/Footer'
import Contact from '../components/Quiz/Contact'
import General from '../components/Quiz/General'
import QuestionNav from '../components/Quiz/QuestionNav'
import QuizFooter from '../components/Quiz/QuizFooter'
import QuizNav from '../components/Quiz/QuizNav'
import Subjects from '../components/Quiz/Subjects'
import Waec from '../components/Quiz/Waec'
import { useAuthContext } from '../hooks/useAuthContext'
import useIdle from '../hooks/useIdleTimer';
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout';


const Quiz = () => {
  const {user} = useAuthContext()
  const nav = useNavigate()
  const { logout } = useLogout()
  const { isIdle } = useIdle({ onIdle: logout , idleTimer: 360})
  return (
    <>
      {user && !isIdle ?(
      <div className='bg-primary-black overflow-hidden'>
        <QuizNav  />
        <div className=" w-[50%] gradient-002" />
        <General />
        <div className="relative" />
        <Waec />
         <div className="relative" />
        <Subjects />
         <div className="relative" />
        <QuestionNav />
        <Contact />
        <Footer />
    </div>
    ) : nav('/')}
    </>
  )
}

export default Quiz