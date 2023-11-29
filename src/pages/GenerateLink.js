import React, { useState } from 'react'

import './GenerateLink.css'

function GenerateLink() {
    const [namaTamu, setNamaTamu] = useState('');
    const [link, setLink] = useState("")

    const message = `Assalamualaikum
    
    Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i *${namaTamu}* untuk menghadiri acara kami.

    *Berikut link undangan kami*, untuk info lengkap dari acara bisa kunjungi :
    
    ${link}
    
    Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.
    
    *Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.*
    
    
    Terima kasih banyak atas perhatiannya.🙏`

    const handleWhatsAppShare = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const handleBuatLink = () => {
        const nama = namaTamu;
        const replacedString = nama.replace(/ /g, '%20');
        const link = "https://rama-cindy.vercel.app/"+replacedString;
        setLink(link)
    }

    const handleClickLink = () => {
        window.open(link,'_blank')
    }

  return (
    <div style={{width:'100vw'}}>
        <div className='input-container'>
        <input type='text' className='input' placeholder='Masukkan Nama Tamu' value={namaTamu} onChange={(e) => {setNamaTamu(e.target.value)}}/>
        <div className='button' onClick={handleBuatLink}>
            <p>Buat Link</p>
        </div>
        {link === ''?(<>
        </>):(<>
            <div style={{marginTop:50, paddingLeft:20, paddingRight:20,width:'100%'}}>
            <p className='copy-info'>Tekan lama untuk memilih dan menyalin teks</p>
            <p onClick={handleClickLink} className='link'>{link}</p>
        </div>
        <div className='button' onClick={handleWhatsAppShare}>
            <p>Bagikan Ke WhatsApp</p>
        </div>
        </>)}
        
        </div>
    </div>
  )
}

export default GenerateLink