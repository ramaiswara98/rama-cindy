import React from 'react'

import './Moment.css'
import IMG1 from '../../assets/images/img1.jpg'
import IMG2 from '../../assets/images/img2.jpg'
import IMG3 from '../../assets/images/img3.jpg'
import IMG4 from '../../assets/images/img4.jpg'
import IMG5 from '../../assets/images/img5.jpg'
import IMG6 from '../../assets/images/img6.jpg'
import IMG7 from '../../assets/images/img7.png'
import IMG8 from '../../assets/images/img8.png'

function Moment() {
    const spanStyles={
        '--i-1': { '--i': 1 },
        '--i-2': { '--i': 2 },
        '--i-3': { '--i': 3 },
        '--i-4': { '--i': 4 },
        '--i-5': { '--i': 5 },
        '--i-6': { '--i': 6 },
        '--i-7': { '--i': 7 },
        '--i-8': { '--i': 8 },

    }
  return (
    <div className='moment-container'>
        <div className='moment-title-container'>
            <p className='moment-title-text'>Moment</p>
        </div>
        {/* <div> */}
            <div className='slider-container' style={{marginTop:60}}>
            <div class="slider">
                <span style={spanStyles['--i-1']}><img src={IMG1}  alt='img1'/></span>
                <span style={spanStyles['--i-2']}><img src={IMG2}  alt='img1'/></span>
                <span style={spanStyles['--i-3']}><img src={IMG3}  alt='img1'/></span>
                <span style={spanStyles['--i-4']}><img src={IMG4}  alt='img1'/></span>
                <span style={spanStyles['--i-5']}><img src={IMG5}  alt='img1'/></span>
                <span style={spanStyles['--i-6']}><img src={IMG6}  alt='img1'/></span>
                <span style={spanStyles['--i-7']}><img src={IMG7}  alt='img1'/></span>
                <span style={spanStyles['--i-8']}><img src={IMG8}  alt='img1'/></span>
            </div>
            </div>
            <div className='galery-container'>
                <div className='galery-row'>
                    <img src={IMG1} alt='img1' className='image-item'/>
                    <img src={IMG2} alt='img1' className='image-item'/>
                    <img src={IMG3} alt='img1' className='image-item'/>
                    <img src={IMG4} alt='img1' className='image-item'/>
                    <img src={IMG5} alt='img1' className='image-item'/>
                    <img src={IMG6} alt='img1' className='image-item'/>
                    <img src={IMG7} alt='img1' className='image-item'/>
                    <img src={IMG8} alt='img1' className='image-item'/>
                    <img src={IMG1} alt='img1' className='image-item'/>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Moment