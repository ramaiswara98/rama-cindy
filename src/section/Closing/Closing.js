import React, { useState } from 'react'

import './Closing.css'
import Modal from '../../component/Modal/Modal';
import ParticlesComponent from '../../component/Particles/Particles';

function Closing() {
  const [open, setOpen] = useState(false);
  const quotes = [
    "Cie… nerima undangan mulu, ngasih undagannya kapan ?😹",
    "Nggak capek diajak jalan mulu? sekali kali minta di ajak nikah lah😹",
    "Pengen nanya kapan nyusul, tapi baru nyadar kamu kan jomblonya udah berumur😹"
  ]

  const toggle = () => {
    const show = open;
    setOpen(!show);
  }
  return (
    <div className="closing-container">
      <ParticlesComponent/>
      <Modal isOpen={open} onClose={toggle}>
        <div className='acara-card' style={{backgroundColor:'#808080'}}>
          <p style={{fontSize:"18px", maxWidth:'80%', paddingTop:'60px'}} className='text-box'>{quotes[Math.floor(Math.random()*quotes.length)]}</p>
          <img src='https://cdn.discordapp.com/attachments/1133382170321371238/1197840349415096380/ketawa.png?ex=65bcbac2&is=65aa45c2&hm=bcd908e30806ffda93ca381e1fb30d97247c3cccb6bb85666a42eb4e20e6029f&' alt='foto-ketawa' style={{width:"80%", marginTop:"-70px"}}/>
          <div className='acara-card-button' onClick={toggle}>
            <p className='acara-card-button-text'>Tutup</p>
          </div>
        </div>
      </Modal>
      <div className="closing-title-container">
        <p className="closing-title-text">Closing</p>
      </div>
      <div>
        <p className="closing-normal-text">
          Terima Kasih Telah Sampai di Akhir, di bawah ini ada kejutan nih, tapi
          buat kalian yang nggak baperan doang yah
        </p>
      </div>
      <div className="acara-card-button" onClick={toggle}>
        <p className="acara-card-button-text">Buka Kejutan !</p>
      </div>
      <div className='footer'>
            <p>Designed with 🤍 by :</p>
            <p>I Gusti Ngurah Rama Iswara</p>
            <p>@rama_iswara7</p>
      </div>
    </div>
  );
}

export default Closing