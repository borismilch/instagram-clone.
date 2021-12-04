import React from 'react'
import ProfileFooter from '../components/layout/profile/content/ProfileFooter'
import { EditSidebar } from '../components/edit/EditSidebar'

import EditUserImage from '../components/edit/edit/EditUserImage'
import EditForm from '../components/edit/EditForm'

const EditProfile = () => {
  return (
    <div className='flex flex-col mt-[20px]  mx-auto w-full max-w-[975px] px-[8px] '>

      <div  className='flex bg-white border mb-[20px] border-gray-300'>

       <div className='smd' style={{flex: '0 0 25%'}}>
          <EditSidebar />
       </div>

       <div className='w-full flex flex-col'>

         <div className='flex w-full  flex-col'>
      
          <EditForm />
         </div>
         
       </div>

      </div>

      <ProfileFooter />
    </div>
  )
}

export default EditProfile
