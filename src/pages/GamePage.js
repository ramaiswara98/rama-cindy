import React, { useEffect, useRef, useState } from 'react'

import './GamePage.css';
import MC1 from '../assets/idle1.png';
import MC2 from '../assets/mc-bicara.gif';
import Lagu from '../assets/lagu.m4a'
import Kenalan from '../section/Kenalan/Kenalan';
import Blip from '../assets/type.m4a'
import OurStory from '../section/OurStory/OurStory';
import Moment from '../section/Moment/Moment';
import Acara from '../section/Acara/Acara';
import Ucapan from '../section/Ucapan/Ucapan';
import Closing from '../section/Closing/Closing';
import Coklat from '../assets/coklat-tengah.png'
import { dialog } from '../data/list';
import { useParams } from 'react-router-dom';

function GamePage() {
const [displayText, setDisplayText] = useState('');
const [state, setState] = useState(null);
const [img, setImg] = useState(MC1);
const [dial,setDial] = useState(true);
const [buttonShow, setButtonShow] = useState(false);
const [selectedDialog, setSelectedDialog] = useState(null);
const [selectedScene, setSelectedScene] = useState();
const [bg, setBg] = useState('red');
const textRef = useRef('');
const {nama} = useParams();

  const speed = 50; // Typing speed in milliseconds

  const handleOnClick= () => {
    stopSong();
    setDial(!dial);
    if(dialog[state+1].response.positif !== undefined){
        if(dialog[state+1].response.positif.response === dialog[state].response.positif.response){
            handleOnClickMulai(state+2);
        }else{
            handleOnClickMulai(state+1);
        }
    }else{
        handleOnClickMulai(state+1);
    }
   
    
  }
  const isString = (value) => {
    return typeof value === 'string';
  }

  const checkScene = (response) => {
    playSong();
    if(response === 'kenalan'){
        setBg('red')
        setSelectedScene(<Kenalan/>)
        setDial(!dial)
    }
    if(response === 'our-story'){
        setBg('coklat')
        setSelectedScene(<OurStory fun={true}/>)
        setDial(!dial)
    }
    if(response === 'momen'){
        setBg('red')
        setSelectedScene(<Moment/>)
        setDial(!dial)
    }
    if(response === 'acara'){
        setBg('red')
        setSelectedScene(<Acara/>)
        setDial(!dial)
    }
    if(response === 'ucapan'){
        setBg('coklat')
        setSelectedScene(<Ucapan/>)
        setDial(!dial)
    }
    if(response === 'closing'){
        setBg('coklat')
        setSelectedScene(<Closing/>)
        setDial(!dial)
    }
  }

  const handleOnClickMulai = (response)=> {
    // setState(response);
    if(state === null){
        setState(0);
        setSelectedDialog(dialog[0])
        const texts = `Halo kak ${nama},
          Terima kasih udah buka undangannya, jangan lupa hadir yah kak hehehe….`
        automateText(texts);
        playAudio();
    }else if(isString(response)){
        checkScene(response);
    }else{
          setState(response);
          setSelectedDialog(dialog[response]);
          automateText(dialog[response].dialog);
          playAudio();
    }
    
  }


  const automateText = (text) => {
    setDisplayText('')
    setButtonShow(false);
    textRef.current = text;
    let index = 0;
    const typingInterval = setInterval(() => {
        
        setImg(MC2)
        const chunkSize = 1;
      if (index < textRef.current.length) {
        const chunk = textRef.current.substring(index, index + chunkSize);
      setDisplayText(prevText => prevText + chunk);
      index += chunkSize;
      } else {
        setImg(MC1)
        setButtonShow(true)
        stopAudio();
        clearInterval(typingInterval);
      }
    }, speed);

  return () => clearInterval(typingInterval);
  }

  function playAudio() {
    const audio = document.getElementById('myAudio');
    audio.currentTime = 0; // Reset audio to the beginning (optional)
    audio.play();
  }

  const playSong = () => {
    const audio = document.getElementById('autoplay');
    // audio.currentTime = 0; // Reset audio to the beginning (optional)
    audio.play();
  }

  const stopSong = () =>{
    const audio = document.getElementById('autoplay');
    audio.pause();
  }

  const stopAudio = () =>{
    const audio = document.getElementById('myAudio');
    audio.pause();
  }

  useEffect(() => {
    // automateText(dialogs[0])
    // eslint-disable-next-line
  }, []);

  return (
    <div
    className='game-main'
    style={{height:dial?'100vh':''}}
    >
         <audio  loop id='autoplay'>
        <source src={Lagu} type='audio/mp4'/>
        Your Browser not support the audio element
      </audio>

        <audio id="myAudio" loop>
        <source src={Blip} type="audio/mp4"/>
        Your browser does not support the audio element.
        </audio>
        <div className='container-char' style={{display:dial?'flex':'none'}}>
            {state === null?(<>
                <p className='text-box' style={{visibility:'hidden'}}>{displayText}</p>
            </>):(<>
                <p className='text-box'>{displayText}</p>
            </>)}
            
            <img src={img} alt='mc' className='character'/>
            <img src={Coklat} alt='bunga' className='bunga'/>
            {state === null?(<>
                <div className="button-game-positif" onClick={()=>{handleOnClickMulai(null)}}>
                    <p className="button-buka-undangan-text" >Mulai</p>
                </div>
            </>):(<>
            {selectedDialog.response.positif !== undefined ?(<>
                <div style={{visibility:buttonShow?'visible':'hidden'}} className="button-game-positif" onClick={()=>{handleOnClickMulai(selectedDialog.response.positif.response)}}>
                    <p className="button-buka-undangan-text" >{selectedDialog.response.positif.text}</p>
                </div>
            </>):(<></>)}
            </>)}
            {state === null?(<>
                <div className="button-game-negatif" onClick={()=>{handleOnClick()}} style={{visibility:'hidden'}}>
                    <p className="button-buka-undangan-text" >Selanjutnya</p>
                </div>
            </>):(<>
            {selectedDialog.response.negatif !== undefined? (<>
                <div style={{visibility:buttonShow?'visible':'hidden'}} className="button-game-negatif" onClick={()=>{handleOnClickMulai(selectedDialog.response.negatif.response)}}>
                    <p className="button-buka-undangan-text" >{selectedDialog.response.negatif.text}</p>
                </div>
            </>):(<></>)}
               
            </>)}
        </div>
        {/* <div className='game-footer'>
            <p>Designed with 🤍 by :</p>
            <p>I Gusti Ngurah Rama Iswara</p>
            <p>@rama_iswara7</p>
      </div> */}
        <div style={{display:dial?'none':'block'}} className={dial?'scene-container':'scene-container active'}>
        {selectedScene}
        
        <div style={{maxWidth:'100%', backgroundColor:bg==='red'?"#AC2F2F":'#4F4747', paddingBottom:"30px", display:'flex',justifyContent:'center'}}>
        <div className="button-game" style={{backgroundColor:bg==='red'?'#4F4747':'#AC2F2F', width:"120px"}} onClick={()=>{handleOnClick()}}>
            {selectedDialog !== null && selectedDialog.id === 14 ? (<>
                <p className="button-game-text" >Selesai</p>
            </>):(<>
                <p className="button-game-text">Selanjutnya</p>
            </>)}
                
            </div>
        </div>
        </div>
        
    </div>
       
  )
}

export default GamePage