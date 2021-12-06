import React, {FC, useEffect, useState} from 'react'

import Story from '../../items/Story'
import { IProfile, IUser } from '../../../types'
import { connect, useDispatch, useSelector,} from 'react-redux'

import StoriesLoader from './loaders/StoriesLoader'
import { collection, onSnapshot } from '@firebase/firestore'

import { db } from '../../../../firebase'

import { setAllUsers } from '../../../redux/actions/creators'

const Stories: FC = () => {

  const dispatch = useDispatch()

  const [suggestions, setSuggestions] = useState<any[]>([])

  const [loadeds, setLoadeds] = useState<boolean[]>([])

  const onImageLoaded = () => {
    console.log(loadeds)
    setLoadeds(prev => [...prev, true])
  }

  useEffect(() => {
    const usersRef = collection(db, 'users')
    onSnapshot(usersRef, (span) => {setSuggestions(span.docs)})

  }, [])

  const user = useSelector((state: any) => state.user.user)
 

  const filteredProfiles: IUser[] = [user,
     ...(suggestions.map(p => p.data()).filter(s => s.uid !== user.uid))
  ]

  return (
    <div className='stories_bar overflow-y-hidden relative'>


    { (suggestions.length !== loadeds.length ) && <StoriesLoader />}

    {
    
     <div className={ 'flex gap-4 opacity-0 ' +  ((suggestions.length  <= loadeds.length) ?  'opacity-100 ' : 'opacity-0 overflow-hidden')}>

      { 
        filteredProfiles[0] && filteredProfiles.map(profile => (
         
          <Story onImageLoaded={onImageLoaded} key={profile?.uid} profile={profile} /> 
        
        )) 
      }

     </div>
    }  

    </div>
  )
}

export default connect()(Stories)
