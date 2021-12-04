import React from 'react'
import GridIcon from '../../icons/profile/GridIcon'
import VerySmallBookmarkIcon from '../../icons/profile/VerySmallBookmarkIcon'

const ProfileTabs: React.FC<{activeFirst: boolean, changeActiveFirst: (val: boolean) => void}> = 
  ({activeFirst, changeActiveFirst}) => {

  return (
    <div className='flex w-full border-t mb-[12px] mt-[12px] md:mt-[38px] border-gray-300 '>

      <div className='mx-auto flex gap-6 '>

          <div
            onClick={() => changeActiveFirst(true)}
           className={'flex cursor-pointer items-center justify-center hover:bg-gray-50 transition-all duration-200 gap-2 p-3 w-[160px] '
            + (activeFirst? 'opacity-100 border-t border-gray-900' : 'opacity-60 border-t-0' )}
          >
             <div className='transform scale-150 md:scale-100 '>
              <GridIcon />
            </div>

            <p className='uppercase smd text-gray-900'>
             Публикации
            </p>

          </div>

          <div
            onClick={() => changeActiveFirst(false)}
           className={'flex items-center cursor-pointer justify-center gap-2 p-3 w-[160px] hover:bg-gray-50 transition-all duration-200  ' + 
          (!activeFirst? 'opacity-100 border-t border-gray-900' : 'opacity-60 border-t-0' ) }>

            <div className='transform scale-150 md:scale-100 '>
              <VerySmallBookmarkIcon />
            </div>
         
            <p className='uppercase smd  text-gray-900'>
             Збережені
            </p>
            
          </div>

      </div>

    </div>

  )
}

export default ProfileTabs
