import React from 'react' 
import {FC, useState, useEffect, useCallback} from 'react'
import Suggesttion from '../Suggestion'

import { useHistory } from 'react-router'


import { collection, DocumentData, onSnapshot } from '@firebase/firestore'
import { db } from '../../../../firebase'

import { connect, useSelector } from 'react-redux'

const Suggestions: FC = () => {

  const followers = useSelector((state: any) => state.user.followers).map((s: {id: string} ) => s.id)

  const history = useHistory()

  const [suggestions, setSuggestions] = useState<DocumentData[]>([])

  const pushHistory = () => {
    history.push('/recomandations')
  }
  
  useEffect(() => {
    const usersRef = collection(db, 'users')
    onSnapshot(usersRef, (span) => {setSuggestions(span.docs.filter(s => !followers.includes(s.id) ))})
    
    setSuggestions(suggestions)

  }, [])

  return (
    <>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-gray-600 text-sm font-bold'>Suggestions for you</h1>
        <p onClick={pushHistory.bind(null)} className='text-blue-500'>See All</p>
  
      </div>
    
      {
        suggestions.map((s) => (
          <Suggesttion key={s.id} suggestion={s.data()} />
        ))
      }
      
    </>
  )
}

export default connect()(Suggestions)
