import React from 'react' 
import {FC, useState, useEffect, useCallback} from 'react'
import Suggesttion from '../Suggestion'
import faker from 'faker'
import { IProfile } from '../../../types'


const Suggestions: FC = () => {

  const [suggestions, setSuggestions] = useState([])
  
  useEffect(() => {
    const suggestions: IProfile[] = new Array(6).fill('').map((_, i) => ({
      ...faker.helpers.createCard(),
      image: faker.image.avatar(),
      id: i
    }))

    setSuggestions(suggestions)

  }, [])

  return (
    <>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-gray-600 text-sm font-bold'>Suggestions for you</h1>
        <p className='text-blue-500'>See All</p>
  
      </div>
    
      {
        suggestions.map((s: IProfile) => (
          <Suggesttion key={s.id} suggestion={s} />
        ))
      }
      
    </>
  )
}

export default Suggestions
