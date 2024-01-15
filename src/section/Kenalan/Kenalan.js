import React from 'react'

import './Kenalan.css'
import Atasan from '../../assets/atasan.png'
import Instagram from '../../assets/instagram.png'
import Rama from '../../assets/prewed/1.png'
import Cindy from '../../assets/prewed/2.png'
import { Fade } from 'react-awesome-reveal'
import ParticlesComponent from '../../component/Particles/Particles'

function Kenalan() {
  return (
    <div className='kenalan-container'>
        <ParticlesComponent/>
        <div className='atasan-container' >
            <img src={Atasan} alt='atasan' className='image-atasan'/>
        </div>
        <div className='kenalan-nama-container'>
            {/* <Fade cascade> */}
            <Fade triggerOnce={true} cascade duration={200} direction='up' className={'kenalan-nama-mempelai-laki'}>I Gusti Ngurah Rama Iswara S.Tr.Kom</Fade>
            {/* </Fade> */}
        </div>
        <div className='kenalan-nama-container'>
            <p className={'kenalan-nama-mempelai-laki'}>&</p>
        </div>
        <div className='kenalan-nama-container'>
            <Fade triggerOnce={true} cascade duration={350} className={'kenalan-nama-mempelai-laki'}>Cindy Amelia Sari</Fade>
        </div>
        <div className='atasan-container'>
            <img src={Atasan} alt='atasan' className='image-atasan-bawah'/>
        </div>
        <div className='coklat-bunga'>
            <Fade duration={3000} triggerOnce={true}>
            <div className='container-main-card'>
                <div className='kenalan-mempelai-card'>
                    <div className='kenalan-mempelai-card-foto-laki'>
                        <img src={Rama} alt='rama' style={{width:'100%'}}/>
                    </div>
                    <p className='kenalan-nama-mempelai-text'>I Gusti Ngurah Rama Iswara S.Tr.Kom</p>
                    <p className='kenalan-putra-dari-text'>Putra dari :</p>
                    <p className='kenalan-orang-tua-text'>I Gusti Ketut Sweka &</p>
                    <p className='kenalan-orang-tua-text'>Hj Murni</p>
                </div>
                <div className='kenalan-instagram-button'>
                    <img src={Instagram} className='instagram-icon' alt='ig-icon'/>
                    <p className='kenalan-instagram-button-text'>@rama_iswara7</p>
                </div>
            </div>
            </Fade>
        </div>
        <div className='coklat-bunga'>
            <Fade duration={3000} triggerOnce={true}>
            <div className='container-main-card'>
                <div className='kenalan-mempelai-card'>
                    <div className='kenalan-mempelai-card-foto-laki'>
                        <img src={Cindy} alt='rama' style={{width:'100%'}}/>
                    </div>
                    <p className='kenalan-nama-mempelai-text'>Cindy Amelia Sari</p>
                    <p className='kenalan-putra-dari-text'>Putri dari :</p>
                    <p className='kenalan-orang-tua-text'>Yusran Mustafa &</p>
                    <p className='kenalan-orang-tua-text'>Muhsana</p>
                </div>
                <div className='kenalan-instagram-button'>
                    <img src={Instagram} className='instagram-icon' alt='ig-icon'/>
                    <p className='kenalan-instagram-button-text'>@cindyameliasari</p>
                </div>
            </div>
            </Fade>
            </div>
        <div className='bunga-bottom'>
            {/* <img src={BungaBawah} alt='bungan-bawan' className='bunga-merah'/> */}
        </div>
    </div>
  )
}

export default Kenalan