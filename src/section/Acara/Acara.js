import React, { useEffect, useState } from 'react'

import './Acara.css'
import Bunga from '../../assets/bunga.png'
import Mahkota from '../../assets/mahkota.png'

function Acara() {
    const targetDates = new Date('2024-02-12T00:00:00'); // Set your target date and time here

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
        <img src={Bunga} alt='bunga' className='bunga-top'/>
        </div>
        <div className='acara-title-container'>
            <p className='acara-title-text'>Acara</p>
        </div>
        <div className='acara-card'>
            <p className='acara-card-title'>Akad Nikah</p>
            <img src={Mahkota} alt='mahkota' className='mahkota'/>
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>
            <div className='acara-card-button'>
                <p className='acara-card-button-text'>Lihat Lokasi</p>
            </div>
            <div className='acara-card-countdown-container'>
                <div className='countdown-item'>
                    <p>{timeLeft.days}</p>
                    <p>Hari</p>
                    
                </div>
                <div className='countdown-item'>
                    <p>{timeLeft.hours}</p>
                    <p>Jam</p>
                    
                </div>
                <div className='countdown-item'>
                    <p>{timeLeft.minutes}</p>
                    <p>Menit</p>
                   
                </div>
                <div className='countdown-item'>
                <p>{timeLeft.seconds}</p>
                    <p>Detik</p>
                    
                </div>
            </div>
        </div>
        <div className='acara-card'>
            <p className='acara-card-title'>Resepsi Mempelai Wanita</p>
            <img src={Mahkota} alt='mahkota' className='mahkota'/>
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>
            <div className='acara-card-button'>
                <p className='acara-card-button-text'>Lihat Lokasi</p>
            </div>
            <div className='acara-card-countdown-container'>
            <div className='countdown-item'>
                    <p>{timeLeft.days}</p>
                    <p>Hari</p>
                    
                </div>
                <div className='countdown-item'>
                    <p>{timeLeft.hours}</p>
                    <p>Jam</p>
                    
                </div>
                <div className='countdown-item'>
                    <p>{timeLeft.minutes}</p>
                    <p>Menit</p>
                   
                </div>
                <div className='countdown-item'>
                <p>{timeLeft.seconds}</p>
                    <p>Detik</p>
                    
                </div>
            </div>
        </div>
        <div className='acara-card'>
            <p className='acara-card-title'>Resepsi Mempelai Pria</p>
            <img src={Mahkota} alt='mahkota' className='mahkota'/>
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>
            <div className='acara-card-button'>
                <p className='acara-card-button-text'>Lihat Lokasi</p>
            </div>
            <div className='acara-card-countdown-container'>
            <div className='countdown-item'>
                    <p>{timeLeft1.days}</p>
                    <p>Hari</p>
                    
                </div>
                <div className='countdown-item'>
                    <p>{timeLeft1.hours}</p>
                    <p>Jam</p>
                    
                </div>
                <div className='countdown-item'>
                    <p>{timeLeft1.minutes}</p>
                    <p>Menit</p>
                   
                </div>
                <div className='countdown-item'>
                <p>{timeLeft1.seconds}</p>
                    <p>Detik</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Acara