import React, { useState } from 'react'

import './Closing.css'
import Modal from '../../component/Modal/Modal';

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
      <Modal isOpen={open} onClose={toggle}>
        <div className='acara-card'>
          <p>{quotes[Math.floor(Math.random()*quotes.length)]}</p>
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