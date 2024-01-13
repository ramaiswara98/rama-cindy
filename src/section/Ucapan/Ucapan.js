import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination,Autoplay } from 'swiper/modules';

import './Ucapan.css'
import { getUcapan, tambahUcapan } from '../../Firebase/FireStore/Ucapan'

function Ucapan() {
    const [nama,setNama] = useState('');
    const [ucapan, setUcapan] = useState('');
    const [alert, setAlert] = useState(false)
    const [button, setButton] = useState({text:'Kirim Ucapan', color:'#AC2F2F', disable:false})
    const [allUcapan, setAllUcapan] = useState([]);

    useEffect(() => {
        getUcapanFromDatabase();
        // eslint-disable-next-line
    },[]);

    

    const getUcapanFromDatabase = async() => {
        const listUcapan = await getUcapan();
        listUcapan.sort((a,b) => new Date(b.waktu) - new Date(a.waktu));
        setAllUcapan(listUcapan);
    }




    const handleOnClick = () => {
        setButton({text:'Loading...', color:"#D9D9D9",disable:true})
        if(nama === '' || ucapan === ''){
            setAlert(true);
            setButton({text:'Kirim Ucapan', color:"#AC2f2f",disable:false})
            console.log("Nama mana ?")
        }else{
            setAlert(false);
            tambahUcapanKeDatabase(nama,ucapan);
            getUcapanFromDatabase();
        }
        
        
    }
    const nothing= () => {

    }

    const tambahUcapanKeDatabase = async(nama,ucapan) => {
        const waktu = new Date();
        const data = {
            nama,
            ucapan,
            waktu
        }
        const status = await tambahUcapan(data);
        if(status){
            setButton({text:'Kirim Ucapan', color:'#AC2F2F',disable:false});
            setNama('');
            setUcapan('')
        }
    }
  return (
    <div className='ucapan-container'>
         <div className='ucapan-title-container'>
            <p className='ucapan-title-text'>Ucapan</p>
        </div>
        
        <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectCube, Pagination,Autoplay]}
        className="cubeSwiper"
      >
        {allUcapan.length > 0 ? (<>
            
            {allUcapan.map((ucapan, index) => {
                return(
                    <SwiperSlide>
                    <div className='kartu-ucapan'>
                        <p className='ucapan'>{`" `+ucapan.ucapan+` "`}</p>
                        <p className='nama-pengirim'>{"-- "+ucapan.nama+" --"}</p>
                    </div>
                    </SwiperSlide>
                )
            })}
            
        </>):(<></>)}
        </Swiper>
        <div className='ucapan-card'>
            <p className='tulis-ucapan-title'>Tulis Ucapan</p>
            <input className='ucapan-input' placeholder='Masukkan Nama'onChange={(e) => {setNama(e.target.value)}} value={nama}/>
            <textarea maxLength={130} className='ucapan-input' rows="5" placeholder='Masukkan Ucapan Kamu Disini' onChange={(e) => {setUcapan(e.target.value)}} value={ucapan}/>
            <p style={{color:'#FF0000', display:alert?'flex':'none'}}>Tolong lengkapi form terlebih dahulu</p>
            <div className='ucapan-card-button' onClick={()=>{button.disable? nothing(): handleOnClick()}} style={{backgroundColor:button.color}}>
                <p className='acara-card-button-text'>{button.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Ucapan