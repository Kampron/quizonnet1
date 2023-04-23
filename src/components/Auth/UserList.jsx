import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import Search from './Search'
import Users from './Users'
import UserStats from './UserStats'

const th = " border-[#eee] border-1 align-top text-left p-[8px]"
const tr = " border-1 border-[#ccc] even:bg-white"


const UserList = () => {
 const {users, dispatch} = useUserContext()


  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/quizonnet/user/getUsers')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_USERS', payload: json})
      }
    }

    fetchUsers()
  }, [])

  return (
    <section className='w-full  flex flex-col justify-center p-[3rem] bg-[rgba(0,0,0,0.4)] rounded-[5px] mt-[1rem]'>
      <UserStats users={users} />

      <div className='user-list'>
        <div className='p-[5px] w-full overflow-x-auto'>
           <div className='flex justify-between items-center mb-5'>
            <span>
              <h3 className='text-white text-[1rem] sm:text-[1.5rem] font-medium'>All Users</h3>
            </span>
            <span>
              <Search />
            </span>         
         </div>
          <table className='border-collapse w-full text-[1.4rem]'>
            <thead className='border-t-2 border-white border-b-2'>
            <tr className={tr}>
                <th className={th}>s/n</th>
                <th className={th}>Name</th>
                <th className={th}>Email</th>
                <th className={th}>Role</th>
                <th className={th}>Change Role</th>
                <th className={th}>Action</th>
              </tr>
            </thead>
            { users && users.map((user, index) => (
                <Users key = {user._id} index={index} user={user} />
            ))}
            
          </table> 
        </div>
        
      </div>
    </section>
  )
}

export default UserList