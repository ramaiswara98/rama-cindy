import React from 'react'
import Kenalan from '../section/Kenalan/Kenalan'
import OurStory from '../section/OurStory/OurStory'
import Moment from '../section/Moment/Moment'
import Acara from '../section/Acara/Acara'
import Ucapan from '../section/Ucapan/Ucapan'
import Closing from '../section/Closing/Closing'
import Lagu from '../assets/lagu.mp3'

function Undangan() {

  return (
    <div>
      <audio autoPlay={'autoplay'} loop controls>
        <source src={Lagu} type='audio/mpeg'/>
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