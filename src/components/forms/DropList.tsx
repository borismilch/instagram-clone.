import React, {useState} from 'react'
import { IDropItem } from '../../types'
import { Photo16_9Icon, Photo1_1Icon, Photo4_5Icon, PhotoIcon } from '../icons'
import DropItem from '../items/DropItem'


const DropItems: IDropItem[] = [
  {
    icon: <Photo16_9Icon/>,
    title: '16:9',
    value: '16:9'
  },
  {
    icon: <Photo1_1Icon/>,
    title: '1:1',
    value: '1:1'
  },
  {
    icon: <Photo4_5Icon/>,
    title: '4:5',
    value: '4:5'
  },
  {
    icon: <PhotoIcon/>,
    title: 'Original',
    value: '16:9'
  }
]

const DropList:React.FC = () => {

  return (
    <ul className='drop_drawler_list'>
     { DropItems.map(d => <DropItem item={d} key={d.title} />) }
    </ul>
  )
}

export default DropList
