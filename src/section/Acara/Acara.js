import React, { useEffect, useState } from 'react'

import './Acara.css'
import Bunga from '../../assets/bunga.png'
import Mahkota from '../../assets/mahkota.png'
import Ring from '../../assets/images/wedding-rings.png'
import Wedding from '../../assets/images/couple.png'

function Acara() {

  const calculateTimeLeft = (targetDate) => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(new Date('2024-02-12T09:00:00')));
  const [timeLeft1, setTimeLeft1] = useState(calculateTimeLeft(new Date('2024-02-13T09:00:00')))
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(new Date('2024-02-12T09:00:00')));
      setTimeLeft1(calculateTimeLeft(new Date('2024-02-13T09:00:00')))
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className='acara-container'>
        <div className='bunga-top-container'>
            <img src={Bunga} alt='bunga' className='bunga-top-left'/>
            <img src={Bunga} alt='bunga' className='bunga-top-right'/>
        </div>
        <div className='acara-title-container'>
            <p className='acara-title-text'>Acara</p>
        </div>
        <div className='acara-card'>
            <p className='acara-card-title'>Akad Nikah</p>
            <img src={Ring} alt='mahkota' className='mahkota'/>
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Pukul 10.00 WITA</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>
        </div>
        <div className='acara-card'>
            <p className='acara-card-title'>Resepsi Mempelai Wanita</p>
            <img src={Wedding} alt='mahkota' className='mahkota'/>
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Pukul 10.00 WITA</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>

        </div>
        <div className='acara-card'>
            <p className='acara-card-title'>Resepsi Mempelai Pria</p>
            <img src={Wedding} alt='mahkota' className='mahkota'/>
            <p className='acara-card-date'>Selasa 13/02/2024</p>
            <p className='acara-card-address'>Pukul 10.00 WITA</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>
        </div>
        <div className='bunga-bottom-container'>
            <img src={Bunga} alt='bunga' className='bunga-bottom-left'/>
            <img src={Bunga} alt='bunga' className='bunga-bottom-right'/>
        </div>
    </div>
  )
}

export default Acara