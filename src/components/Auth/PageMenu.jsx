import React from 'react'
import { NavLink } from 'react-router-dom'

const active = "bg-purpleColor text-white py-[0.3rem] px-[0.6rem] rounded-sm "




const PageMenu = () => {
    
  return (
    <div className='absolute w-full top-4 mb-[2rem] sm:w-1/2'>
        <nav className='text-purpleColor bg-white p-[1rem] mb-[1rem] rounded-sm'>
            <ul className='flex items-center 
           justify-evenly font-medium'>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? active : "")}
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? active : "")}
                        to="/changepwd">
                            Change Password
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? active : "")}
                        to="/users">
                            Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default PageMenu