import React, { useEffect, useState } from 'react'
import ModalLayout from '../layout/ModalLayout'
import { connect, useDispatch, useSelector } from 'react-redux'

import { hideInterectionModal } from '../../redux/actions/creators'

import { useHistory } from 'react-router-dom'

import ModalButton from './ModalButton'
import { deleteDoc, doc, onSnapshot } from '@firebase/firestore'
import { db } from '../../../firebase'

const InterectionsModal:React.FC = () => {

  const history = useHistory()

  const dispatch = useDispatch()

  const isOpen = useSelector((state: any) => state.interectionModal.show)
  const [currentId = '', userId = ''] = (useSelector((state: any): string => state.interectionModal.currentId)).split(' ')

  const [following, setFolllowing] = useState(false)
  const user = useSelector((state: any) => state.user.user)
  const isCurrent = user.uid == userId

  const mock = () => {}

  const closeModale = () => {
    dispatch(hideInterectionModal())
  }

  const unFollow = async () => {
    const subscriptionRef = doc(db, 'users', user.uid, 'followers', userId) 
    const follewRef = doc(db, 'users', user.uid, 'following', user.uid) 
    if (following) {
      await deleteDoc(subscriptionRef)
      await deleteDoc(follewRef)
    }

    closeModale()
  }

  if (!user) { return <div></div> }

  return (
  <ModalLayout closeModal={closeModale} isOpen={isOpen} >
  <div className='h-screen flex justify-center items-center'>

    <div className="small_modal">

      <div className='flex flex-col'>

       { isCurrent ?  <ModalButton  text={'Видалити'} cb={mock} danger={true} /> : 
       <ModalButton  text={'Заблокувати'} cb={mock} danger={true} />  
       }

       { !isCurrent && following && <ModalButton  text={'Відмінити підписку'} cb={unFollow.bind(null)} danger={true} />
}
       <ModalButton  text={'Інші публікації'} cb={() => history.push('/profile/' + userId)}  />

       <ModalButton  text={'Поделиться'} cb={mock} />

       <ModalButton  text={'Копировать ссылку'} cb={mock}  />

       <ModalButton  text={'Вставить'} cb={mock}  />

      <ModalButton  text={'Отменить'} cb={closeModale} />
       

      </div>

      </div>


    </div>
   
    </ModalLayout>
  )
}

export default connect()(InterectionsModal)
