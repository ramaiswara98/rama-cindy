import React from 'react'

import './Ucapan.css'

function Ucapan() {
  return (
    <div className='ucapan-container'>
         <div className='ucapan-title-container'>
            <p className='ucapan-title-text'>Ucapan</p>
        </div>
        <div className='ucapan-card'>
            <input className='ucapan-input' placeholder='Masukkan Nama'/>
            <textarea className='ucapan-input' rows="5" placeholder='Masukkan Ucapan Kamu Disini'/>
            <div className='acara-card-button'>
                <p className='acara-card-button-text'>Kirim Ucapan</p>
            </div>
        </div>
        <div style={{marginTop:20}}>
            <div className='ucapan-item-container'>
                <div className='ucapan-avatar-container'>
                    <p className='ucapan-avatar-text'>I</p>
                </div>
                <div className='ucapan-nama-ucapan-container'>
                    <p className='ucapan-nama-text'>Nama Tamu</p>
                    <p className='ucapan-ucapan-text'>lorem ipsum makan asaasa</p>
                </div>
            </div>
        </div>
        <div style={{marginTop:20, Height:"70vh", overflowY:'scroll'}}>
            <div className='ucapan-item-container'>
                <div className='ucapan-avatar-container'>
                    <p className='ucapan-avatar-text'>I</p>
                </div>
                <div className='ucapan-nama-ucapan-container'>
                    <p className='ucapan-nama-text'>Nama Tamu</p>
                    <p className='ucapan-ucapan-text'>lorem ipsum makan asaasa</p>
                </div>
            </div>
        </div>
        <div style={{marginTop:20}}>
            <div className='ucapan-item-container'>
                <div className='ucapan-avatar-container'>
                    <p className='ucapan-avatar-text'>I</p>
                </div>
                <div className='ucapan-nama-ucapan-container'>
                    <p className='ucapan-nama-text'>Nama Tamu</p>
                    <p className='ucapan-ucapan-text'>lorem ipsum makan asaasa</p>
                </div>
            </div>
        </div>
        <div style={{marginTop:20}}>
            <div className='ucapan-item-container'>
                <div className='ucapan-avatar-container'>
                    <p className='ucapan-avatar-text'>I</p>
                </div>
                <div className='ucapan-nama-ucapan-container'>
                    <p className='ucapan-nama-text'>Nama Tamu</p>
                    <p className='ucapan-ucapan-text'>lorem ipsum makan asaasa</p>
                </div>
            </div>
        </div>
        <div style={{marginTop:20}}>
            <div className='ucapan-item-container'>
                <div className='ucapan-avatar-container'>
                    <p className='ucapan-avatar-text'>I</p>
                </div>
                <div className='ucapan-nama-ucapan-container'>
                    <p className='ucapan-nama-text'>Nama Tamu</p>
                    <p className='ucapan-ucapan-text'>lorem ipsum makan asaasa</p>
                </div>
            </div>
        </div>
        <div style={{marginTop:20}}>
            <div className='ucapan-item-container'>
                <div className='ucapan-avatar-container'>
                    <p className='ucapan-avatar-text'>I</p>
                </div>
                <div className='ucapan-nama-ucapan-container'>
                    <p className='ucapan-nama-text'>Nama Tamu</p>
                    <p className='ucapan-ucapan-text'>lorem ipsum makan asaasa</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ucapan