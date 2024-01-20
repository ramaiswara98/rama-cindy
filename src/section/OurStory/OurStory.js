import React from 'react'

import './OurStory.css'
import Bunga3 from '../../assets/bunga3.png'
import {  Slide } from 'react-awesome-reveal'
import ParticlesComponent from '../../component/Particles/Particles'

function OurStory({fun}) {

  const story = `  Allah memang selalu punya jalan untuk mempertemukan dua insan yang Dia takdirkan untuk bersama.

  Mengawali komunikasi dari sosial media, hingga akhirnya bisa bertatap muka untuk pertama kalinya merupakan sebuah kebahagiaan yang luar biasa.
  
  Tidaklah sempurna, kami berdua, insan - insan yang terjalin dalam ikatan cinta, tak jarang komunikasi harus berakhir dengan gemerisik air mata, ditengah gemuruh tawa bahagia tiap harinya. Akan tetapi itulah alur yang harus kami lalui bersama. Anugerah cinta dari yang sang maha pemilik asmara membuat kami tetap bersama dan saling menjaga.
  
  Melalui berbagai hal bersama, suka duka, tangis tawa, amarah canda, dan lika liku yang ada, membuat kita akhirnya menjadi lebih matang dan dewasa. Membuat kita semakin mengerti bahwa kita saling membutuhkan satu sama lainnya, dan akan sangat sulit untuk melanjutkan bahagia tanpa salah satunya. 
  
  Akhirnya masa itupun tiba, masa dimana kami secara sadar memutuskan untuk menatap langkah selanjutnya, langkah yang memiliki lebih banyak tantangan tentunya, akan tetapi kami mantap untuk melalui nya karena kami yakin ini adalah langkah yang di ridhoi oleh Nya. 
  
  Titik itupun tiba, titik dimana kami akan meresmikan semuanya, titik dimana awal terbinanya bahtera rumah tangga, yang semoga akan menjadi keluarga sederhana yang berbahagia terlepas apapun nanti badai yang mencoba menenggelamkannya.
  
  Maka dari itu mohon doa dan restunya, semoga kami bisa mendapatkan ridho dari Nya agar bisa menjadi keluarga yang sakinah mawaddah dan warahma.`
  return (
    <div className='our-story-container'>
      {fun && (
        <ParticlesComponent/>
      )}
      
        <div className='our-story-title-container'>
            <p className='our-story-title-text'>Our Story</p>
        </div>
       
        <Slide className='our-story-images' direction='left' duration={2000} triggerOnce={true}>
        {/* <div className='our-story-images'> */}
            <img src={"https://cdn.discordapp.com/attachments/1133382170321371238/1196437344102912071/WhatsApp_Image_2024-01-15_at_19.41.50.jpeg?ex=65b7a01b&is=65a52b1b&hm=7d9ba538999eb48b5ac263252d66eba63ae912b52d19d524c826f26999b8bbc4&"} alt='rama-cindy' style={{width:"100%"}}/>
       
        {/* </div> */}
        </Slide>
        <div className='our-story-text-container'>
            <p className='our-story-text'>
            {story}
            </p>
        </div>
        <div>
          <img src={Bunga3} alt='bunga-3' className='bunga-3'/>
        </div>
    </div>
  )
}

export default OurStory