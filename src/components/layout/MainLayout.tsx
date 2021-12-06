import React, {Suspense, lazy} from 'react'

import Header from './Header'
import StoriesLoader from './home/loaders/StoriesLoader'
import HeaderFooter from './HeaderFooter'

const AddPostModal = lazy(() => import('./AddPostModal')) 
const InterestionModal = lazy(() => import('../modals/InterectionsModal'))



const MainLayout:React.FC = ({children}) => {
  return (
    <>
    <Header />

      <section>
        {children}
      </section>
    
    <HeaderFooter />

    <Suspense fallback={<StoriesLoader />}>
      <AddPostModal /> 
    </Suspense>

      
    

   
    </>

  )
}

export default MainLayout
