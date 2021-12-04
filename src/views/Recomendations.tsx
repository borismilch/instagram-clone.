
import React, { useEffect } from 'react'
import SubscribtionItem from '../components/items/SubscribtionItem'
import { connect, useSelector } from 'react-redux'
import './grid.css'
import { IUser } from '../types'
import { collection, onSnapshot } from '@firebase/firestore'
import { setUserFollowers, setUserFollowing } from '../redux/actions/generators'
import { db } from '../../firebase'


const Recomendations = () => {

  const users: IUser[] = useSelector((state: any) => state.user.users)
  const user: IUser = useSelector((state: any) => state.user.user)

  const filteredUsers = users.filter(u => u.uid !== user.uid)

  return (
    <div className='recomends_container py-[25px] md:py-[60px] flex flex-col gap-2' >

      <h1 className='text-[#262626] font-bold'>
        Recomendations
      </h1>

      <div className='flex flex-col pt-2 px-5 pb-5 rounded-md border bg-white'>
        {
          filteredUsers.map(u => (
            <SubscribtionItem user={u} />
          ))
        }
      </div>

    </div>
  )
}

export default connect()(Recomendations)
