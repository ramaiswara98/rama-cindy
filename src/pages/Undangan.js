import React, { useEffect } from 'react'
import Kenalan from '../section/Kenalan/Kenalan'
import OurStory from '../section/OurStory/OurStory'
import Moment from '../section/Moment/Moment'
import Acara from '../section/Acara/Acara'
import Ucapan from '../section/Ucapan/Ucapan'
import Closing from '../section/Closing/Closing'
import Lagu from '../assets/lagu.m4a'

function Undangan() {
  useEffect(() => {
    document.getElementById('autoplay').play().catch((error) => {
      document.addEventListener('touchstart', ()=>{
        document.getElementById('autoplay').play().catch((error) => {
          document.addEventListener('click', ()=> {
            document.getElementById('autoplay').play()
          })
        })
      },{once:true})
    })
  })
  
  return (
    <div>
      <audio autoPlay={'autoplay'} loop id='autoplay'>
        <source src={Lagu} type='audio/mp4'/>
        Your Browser not support the audio element
      </audio>
        <Kenalan/>
        <OurStory/>
        <Moment/>
        <Acara/>
        <Ucapan/>
        <Closing/>
    </div>
  )
}

export default Undangan