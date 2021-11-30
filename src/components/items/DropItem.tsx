import React from 'react'
import { connect, useDispatch, useSelector }  from 'react-redux'
import { IDropItem } from '../../types'

import { changeRatio } from '../../redux/actions/actions/drawlerActions'

const DropItem: React.FC<{item:IDropItem}> = ({item}) => {

  const dispatch = useDispatch()
  const ratio = useSelector((state: any) => state.drawler.imageRatio )

  const changeActiveRatio = () => {
    dispatch(changeRatio(item.value))
  } 

  return (
    <>
      <li onClick={changeActiveRatio.bind(null)} className={'drop_drawler_item ' + (ratio === item.value ? 'text-white opacity-100' : 'foo')}>
        <span>{item.title} </span>
        { item.icon }
      </li>
    </>
  )
}

export default connect()(DropItem)
