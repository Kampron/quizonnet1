import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ChangePwd from "./pages/ChangePwd"
import EnglishShs from "./pages/EnglishShs"
import EnglishShsSheet from "./pages/EnglishShsSheet"
import EnglishShsSheet2 from "./pages/EnglishShsSheet2"
import ForgotPwd from "./pages/ForgotPwd"
import Home from "./pages/Home"
import Login from "./pages/Login"
import LoginCode from "./pages/LoginCode"
import Profile from "./pages/Profile"
import Quiz from "./pages/Quiz"
import Register from "./pages/Register"
import ResetPwd from "./pages/ResetPwd"
import Verify from "./pages/Verify"



/** react routes */
const router = createBrowserRouter([
 
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/quiz',
    element : <Quiz />  
  },
  {
    path : '/register',
    element : <Register />  
  },
  {
    path : '/login',
    element : <Login />  
  },
  {
    path : '/forgotpwd',
    element : <ForgotPwd />  
  },
  {
    path : '/resetpwd/:resetToken',
    element : <ResetPwd />  
  },
  {
    path : '/verify',
    element : <Verify />  
  },
  {
    path : '/logincode/:email',
    element : <LoginCode/>  
  },
   {
    path : '/profile',
    element : <Profile />  
  },
  {
    path : '/changepwd',
    element : <ChangePwd />  
  },
  {
    path : '/englishshs',
    element : <EnglishShs />  
  },
  {
    path : '/englishshssheet',
    element: <EnglishShsSheet />
  },
  {
    path : '/englishshssheet2',
    element: <EnglishShsSheet2 />
  },
  
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

