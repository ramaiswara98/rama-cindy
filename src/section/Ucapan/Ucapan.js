import React, { useEffect, useState } from 'react'

import './Ucapan.css'
import { getUcapan, tambahUcapan } from '../../Firebase/FireStore/Ucapan'

function Ucapan() {
    const [nama,setNama] = useState('');
    const [ucapan, setUcapan] = useState('');
    const [alert, setAlert] = useState(false)
    const [button, setButton] = useState({text:'Kirim Ucapan', color:'#AC2F2F', disable:false})
    const [ucapanList, setUcapanList] = useState([]);
    const [totalPage, setTotalPage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [allUcapan, setAllUcapan] = useState([]);

    useEffect(() => {
        getUcapanFromDatabase();
        // eslint-disable-next-line
    },[]);

    const formatDate = (date) => {
        const waktu = new Date(date);
        const tanggal = waktu.getDate()<10?'0'+waktu.getDate():waktu.getDate();
        const bulan = waktu.getMonth()<10 ?'0'+(waktu.getMonth()+1):(waktu.getMonth()+1);
        const tahun = waktu.getFullYear();
        const jam = waktu.getHours() < 10 ?'0'+waktu.getHours():waktu.getHours();
        const menit = waktu.getMinutes() < 10 ? '0'+waktu.getMinutes():waktu.getMinutes();

        const displayDate = tanggal+'/'+bulan+'/'+tahun+' - '+jam+':'+menit;
        return displayDate;
    }
    
    const paginationArray = (array, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return array.slice(startIndex, startIndex+pageSize);
    }

    const getUcapanFromDatabase = async() => {
        const listUcapan = await getUcapan();
        listUcapan.sort((a,b) => new Date(b.waktu) - new Date(a.waktu));
        setAllUcapan(listUcapan);
        const length = getTotalPages(listUcapan.length,5);
        setTotalPage(length)
        const newArray = paginationArray(listUcapan,1,5)
        setUcapanList(newArray)
    }
    const getTotalPages = (arrayLength, pageSize) => {
        return Math.ceil(arrayLength/pageSize);
    }


    const clickSelanjutnya = () => {
        if(currentPage === totalPage){

        }else{
            const pageNow = currentPage;
            setCurrentPage(pageNow+1)
            const newArray = paginationArray(allUcapan,pageNow+1,5)
            setUcapanList(newArray)
        }
    }

    const clickSebelumnya = () => {
        if(currentPage === 1){

        }else{
            const pageNow = currentPage;
            setCurrentPage(pageNow-1)
            const newArray = paginationArray(allUcapan,pageNow-1,5)
            setUcapanList(newArray)
        }
    }

    const handleOnClick = () => {
        setButton({text:'Loading...', color:"#D9D9D9",disable:true})
        if(nama === '' || ucapan === ''){
            setAlert(true);
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
        <div className='ucapan-card'>
            <input className='ucapan-input' placeholder='Masukkan Nama'onChange={(e) => {setNama(e.target.value)}} value={nama}/>
            <textarea className='ucapan-input' rows="5" placeholder='Masukkan Ucapan Kamu Disini' onChange={(e) => {setUcapan(e.target.value)}} value={ucapan}/>
            <p style={{color:'#FF0000', display:alert?'flex':'none'}}>Tolong lengkapi form terlebih dahulu</p>
            <div className='acara-card-button' onClick={()=>{button.disable? nothing(): handleOnClick()}} style={{backgroundColor:button.color}}>
                <p className='acara-card-button-text'>{button.text}</p>
            </div>
        </div>
        <div>

        </div>
        {ucapanList.length > 0 ? (<>
            {ucapanList.map((ucapan, index) => {
                return(
                    <div style={{marginTop:20}} key={index}>
                        <div className='ucapan-item-container'>
                            <div className='ucapan-avatar-container'>
                                <p className='ucapan-avatar-text'>{ucapan.nama.charAt(0)}</p>
                            </div>
                            <div className='ucapan-nama-ucapan-container'>
                                <p className='ucapan-waktu-text'>{formatDate(ucapan.waktu)}</p>
                                <p className='ucapan-nama-text'>{ucapan.nama}</p>
                                <p className='ucapan-ucapan-text'>{ucapan.ucapan}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </>):(<></>)}
        <div className='pagination'>
            {currentPage === 1 ? (
                <></>
            ):(<>
            <div className='pagination-button' onClick={clickSebelumnya}>
                <p>Sebelumnya</p>
            </div>
            </>)}
            
            {currentPage===totalPage?(<></>):(<>
                <div className='pagination-button' onClick={clickSelanjutnya}>
                <p>Selanjutnya</p>
            </div>
            </>)}
            
        </div>
       
    </div>
  )
}

export default Ucapan