import React from 'react'

import './Acara.css'
import Bunga from '../../assets/bunga.png'
import Ring from '../../assets/images/wedding-rings.png'
import Wedding from '../../assets/images/couple.png'
import { Fade, Slide } from 'react-awesome-reveal'
import ParticlesComponent from '../../component/Particles/Particles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

function Acara() {

  // const calculateTimeLeft = (targetDate) => {
  //   const difference = targetDate.getTime() - new Date().getTime();

  //   if (difference > 0) {
  //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  //     return { days, hours, minutes, seconds };
  //   }

  //   return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  // };

  

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(new Date('2024-02-12T09:00:00')));
  // const [timeLeft1, setTimeLeft1] = useState(calculateTimeLeft(new Date('2024-02-13T09:00:00')))
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft(new Date('2024-02-12T09:00:00')));
  //     setTimeLeft1(calculateTimeLeft(new Date('2024-02-13T09:00:00')))
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);
  return (
    <div className='acara-container'>
      <ParticlesComponent/>
      
        <div className='bunga-top-container'>
          <Fade duration={3000}>
            <img src={Bunga} alt='bunga' className='bunga-top-left'/>
          
            <img src={Bunga} alt='bunga' className='bunga-top-right'/>
            </Fade>
        </div>
        <div className='acara-title-container'>
            <p className='acara-title-text'>Acara</p>
        </div>
        <Slide triggerOnce={true}>
        <div className='acara-card'>
            <p className='acara-card-title'>Akad Nikah</p>
            <img src={Ring} alt='mahkota' className='mahkota'/>
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Pukul 09.00 WITA</p>
            <p className='acara-card-address'>Jln.Angkatan 66, Lempangge, Rappang</p>
            
        </div>
       
        </Slide>
        <Slide triggerOnce={true} direction='right'>
        <div className='acara-card'>
            <p className='acara-card-title'>Resepsi Mempelai Wanita</p>
            <img src={Wedding} alt='mahkota' className='mahkota'/>
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Pukul 10.00 WITA</p>
            <p className='acara-card-address'>Jln.Angkatan 66, Lempangge, Rappang</p>

        </div>
        <div className='acara-card-lokasi' style={{marginTop:"-15px"}}
        onClick={()=>{window.open("https://www.google.com/maps/place/3%C2%B050'57.4%22S+119%C2%B049'08.4%22E/@-3.8490791,119.8188818,19z/data=!4m4!3m3!8m2!3d-3.84929!4d119.819002?entry=ttu")}}
        >
          <div></div>
          <div className='lokasi-items'>
            <FontAwesomeIcon icon={faMapLocationDot}/>
            <p>Lokasi</p>
          </div>
          <div className='icon-right'>
            <FontAwesomeIcon icon={faChevronRight}/>
          </div>
        </div>
        </Slide>
        <Slide triggerOnce={true} direction='up'>
        <div className='acara-card'>
            <p className='acara-card-title'>Resepsi Mempelai Pria</p>
            <img src={Wedding} alt='mahkota' className='mahkota'/>
            <p className='acara-card-date'>Selasa 13/02/2024</p>
            <p className='acara-card-address'>Pukul 10.00 WITA</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>
        </div>
        <div className='acara-card-lokasi' style={{marginTop:"-15px"}} onClick={()=> {window.open("https://www.google.com/maps/place/UD.+Balibu/@-4.0707179,119.8540313,20.23z/data=!4m6!3m5!1s0x2d95c1a167882a69:0xf101f4b65de95875!8m2!3d-4.0707512!4d119.8540378!16s%2Fg%2F11bwyrr3_f?entry=ttu")}}>
          <div></div>
          <div className='lokasi-items'>
            <FontAwesomeIcon icon={faMapLocationDot}/>
            <p>Lokasi</p>
          </div>
          <div className='icon-right'>
            <FontAwesomeIcon icon={faChevronRight}/>
          </div>
        </div>
        </Slide>
        <div className='bunga-bottom-container'>
        <Fade duration={3000} triggerOnce={true}>
            <img src={Bunga} alt='bunga' className='bunga-bottom-left'/>
            <img src={Bunga} alt='bunga' className='bunga-bottom-right'/>
            </Fade>
        </div>
        {/* </Particles> */}
    </div>
  )
}

export default Acara