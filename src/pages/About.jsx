import React from 'react'
import Header from '../components/Header'
import AboutFeatures from '../components/Features'

function About(props) {

  return (
   <>
   <Header/>
   <AboutFeatures data={props.data}/>
   </>
  )
}

export default About