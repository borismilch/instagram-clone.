import React, {FC, useEffect, useState} from 'react'
import faker from 'faker'
import Story from '../../items/Story'
import { IProfile } from '../../../types'
import { connect, useDispatch,} from 'react-redux'

import StoriesLoader from './loaders/StoriesLoader'

const Stories: FC = () => {
  const dispatch = useDispatch()

  const [suggestions, setSuggestions] = useState<IProfile[]>([])

  const [loadeds, setLoadeds] = useState<boolean[]>([])

  const onImageLoaded = () => {
    console.log(loadeds)
    setLoadeds(prev => [...prev, true])
  }

  useEffect(() => {

    const suggestions: any[] = new Array(20).fill('').map((_, i) => ({
      ...faker.helpers.createCard(),
      image: faker.image.avatar(),
      id: i
    }))

    setSuggestions(suggestions)

  }, [])

  return (
    <div className='stories_bar overflow-y-hidden relative'>


    { (suggestions.length / 2 > loadeds.length ) && <StoriesLoader />}

    {
    
     <div className={ 'flex gap-4 ' +  ((suggestions.length / 2 <= loadeds.length) ?  'opacity-100 ' : 'opacity-0 overflow-hidden')}>

      { 
        suggestions.map(profile => (
          <Story onImageLoaded={onImageLoaded} key={profile.id} profile={profile} />
        )) 
      }

     </div>
    }  

    </div>
  )
}

export default connect()(Stories)
