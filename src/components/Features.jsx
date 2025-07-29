import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";

function AboutFeatures(props) {
  return (
   
   <div className='flex'>
    <div>
      <img src={props.data.image} alt="" />
    </div>
    <div >
      <p>{props.data.title}</p>
      <p>{props.data.subtitle}</p>
      {
        props.data.features.map((el,index)=>{
          return <div className='flex gap-1 '><IoMdCheckmarkCircle  className='text-green-400'/> <p key={index}>{el}</p></div>

        })
      }
    </div>
   </div>
  )
}

export default AboutFeatures