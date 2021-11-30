import React, {Suspense, lazy} from 'react'

import Header from './Header'
import HeaderFooter from './HeaderFooter'

const AddPostModal = lazy(() => import('./AddPostModal')) 

const MainLayout:React.FC = ({children}) => {
  return (
    <>
    <Header />

      <section>
        {children}
      </section>
    
    <HeaderFooter />

    <Suspense fallback={<div className='opacity-0' />}>
      <AddPostModal /> 
    </Suspense>

   
    </>

  )
}

export default MainLayout
