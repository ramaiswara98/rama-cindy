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
        <div className='acara-card'>
          <p style={{fontSize:"18px"}}>{quotes[Math.floor(Math.random()*quotes.length)]}</p>
          <img src='https://media.discordapp.net/attachments/1133382170321371238/1195467046448799784/1.jpg?ex=65b41872&is=65a1a372&hm=59bbb7594581c6e0bd4eccbc8b1b81ff72948b99ec4fd47a76371daf2d1bfe73&=&format=webp&width=1272&height=848' alt='foto-ketawa' style={{width:"100%"}}/>
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