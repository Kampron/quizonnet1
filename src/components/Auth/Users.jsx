import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useAuthContext } from '../../hooks/useAuthContext'  
import ChangeRole from './ChangeRole'


const td = "align-top text-left p-[8px] "

const Users = ({ user, index }) => {
    const { dispatch } = useAuthContext()

    const handleChange = async (role) => {
        const response = await fetch('/quizonnet/user/' + user._id, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({role})
        })
        const  json = await response.json()

        if (response.ok) { 
            dispatch({type: 'SET_USER', payload: json})
            
        }
        
    }


    const handleClick = async () => {
        const response = await fetch('/quizonnet/user/' + user._id, {
            method: 'DELETE'
        })
        const  json = await response.json()

        if (response.ok) { 
            dispatch({type: 'DELETE_USER', payload: json})
        }
    }



  return (
        <tbody 
            className=' even:bg-white'>
            <tr className=  {'hover:bg-[rgba(62,162,249,0.3)] border-1'}>
            <td className={td}>{index + 1}</td>
            <td className={td}>{user.username}</td>
            <td className={td}>{user.email}</td>
            <td className={td}>{user.role}</td>
            <td className={td}>
                <ChangeRole handleChange={handleChange}  />
            </td>
            <td className={td}>
                <span onClick={handleClick} className="cursor-pointer" >
                <FaTrash  size={20} color="red" />
                </span>
            </td>
            </tr>
        </tbody>

  )
}

export default Users