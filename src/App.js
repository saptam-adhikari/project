
import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Programs from './component/programs/Programs'
import CardContainer from './component/Cards/CardCotainer'
import Innerpages from './component/Innerpage/Innerpages'



const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Programs/>
   <CardContainer/>
   <Innerpages/>
   </>
  )
}

export default App
