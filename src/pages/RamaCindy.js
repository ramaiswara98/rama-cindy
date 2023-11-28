import React, { useEffect, useState } from "react";
import Love from '../assets/love.svg'

import "./RamaCindy.css";

function RamaCindy() {
  const [transition, setTransition] = useState('');
  const [namaTamu, setNamaTamu] = useState('')

  useEffect(()=> {
    // setTransition('active');
    const timeout = setTimeout(() => {
      setTransition('active');
    }, 100);
    animatedName("Ahmad Heriyawan")
  },[])

  const animatedName = (nama)=>{
    const string = nama;
    const arrayFromString = string.split('');
    let namas = '';
    for(let i =0 ;i<arrayFromString.length;i++){
      const timeout2 = setTimeout(()=>{
        namas=namas+arrayFromString[i];
        setNamaTamu(namas)
      },1000)
    }
    console.log(arrayFromString)
  }
  return (
    <div className="cover-undangan">
      <div className="overlay">
        <div className="the-wedding-of-container">
          <p className="the-wedding-of-text">The Wedding Of</p>
        </div>
        <div className="nama-mempelai-container">
          <div className={"nama-mempelai-1 "+transition}>
            <p className={"nama-mempelai-text"}>Rama</p>
          </div>
          <div className="nama-mempelai-dan">
            <p className="nama-mempelai-text">&</p>
          </div>
          <div className={"nama-mempelai-2 "+transition}>
            <p className="nama-mempelai-text">Cindy</p>
          </div>
        </div>
        <div className="love-icon-container">
          <img src={Love} className={"love-icon "+transition}/>
        </div>
        <div className={"bottom-container "+transition}>
          <div className="kepada-yth-container">
            <p className={"kepada-yth-text "+transition}>Kepada Yth</p>
          </div>
          <div className="kepada-container">
            <p className="kepada-text">Ahmad Heriyawan</p>
          </div>
          <div className="mohon-maaf-container">
            <p className="mohon-maaf-text">
              *Mohon Maaf Apabila Ada Kesalahan Penulisan Nama/Gelar
            </p>
          </div>
          <div>
            <div className="button-buka-undangan">
                <p className="button-buka-undangan-text">Buka Undangan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RamaCindy;
