import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../Firebase";


export const tambahUcapan = async(data) => {
const {nama, ucapan,waktu} = data;

try {
  const docRef = await addDoc(collection(db, "ucapan"), {
    nama: nama,
    ucapan: ucapan,
    waktu: waktu.toString()
  });
  if(docRef.id){
    return true
  }else{
    return false
  }
} catch (e) {
    return false
}
}

export const getUcapan = async() => {
    const querySnapshot = await getDocs(collection(db, "ucapan"));
    let ucapan = [];
    querySnapshot.forEach((doc) => {
        ucapan.push(doc.data())
    });
    return ucapan

}