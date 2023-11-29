import React from 'react'

import './Acara.css'
import Bunga from '../../assets/bunga.png'

function Acara() {
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
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>
            <div className='acara-card-button'>
                <p className='acara-card-button-text'>Lihat Lokasi</p>
            </div>
            <div className='acara-card-countdown-container'>
                <div className='countdown-item'>
                    <p>Hari</p>
                    <p>32</p>
                </div>
                <div className='countdown-item'>
                    <p>Jam</p>
                    <p>32</p>
                </div>
                <div className='countdown-item'>
                    <p>Menit</p>
                    <p>32</p>
                </div>
                <div className='countdown-item'>
                    <p>Detik</p>
                    <p>32</p>
                </div>
            </div>
        </div>
        <div className='acara-card'>
            <p className='acara-card-title'>Resepsi Mempelai Wanita</p>
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>
            <div className='acara-card-button'>
                <p className='acara-card-button-text'>Lihat Lokasi</p>
            </div>
            <div className='acara-card-countdown-container'>
                <div className='countdown-item'>
                    <p>Hari</p>
                    <p>32</p>
                </div>
                <div className='countdown-item'>
                    <p>Jam</p>
                    <p>32</p>
                </div>
                <div className='countdown-item'>
                    <p>Menit</p>
                    <p>32</p>
                </div>
                <div className='countdown-item'>
                    <p>Detik</p>
                    <p>32</p>
                </div>
            </div>
        </div>
        <div className='acara-card'>
            <p className='acara-card-title'>Resepsi Mempelai Pria</p>
            <p className='acara-card-date'>Senin 12/02/2024</p>
            <p className='acara-card-address'>Jl.Poros Wette'e No.36, Desan Wanio Timoreng</p>
            <div className='acara-card-button'>
                <p className='acara-card-button-text'>Lihat Lokasi</p>
            </div>
            <div className='acara-card-countdown-container'>
                <div className='countdown-item'>
                    <p>Hari</p>
                    <p>32</p>
                </div>
                <div className='countdown-item'>
                    <p>Jam</p>
                    <p>32</p>
                </div>
                <div className='countdown-item'>
                    <p>Menit</p>
                    <p>32</p>
                </div>
                <div className='countdown-item'>
                    <p>Detik</p>
                    <p>32</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Acara