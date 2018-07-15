import axios from 'axios'
import { getToken } from '@/utils/auth'

export function Export(url, data) {
  axios.defaults.headers.common['Ticket'] = getToken();
  axios.post(url,data,{responseType: 'arraybuffer', baseURL: process.env.BASE_API }).then((res) => {
    console.log(res);
    let blob = new Blob([res.data], { type: "application/vnd.ms-excel" }); 
　　let objectUrl = window.URL.createObjectURL(blob); 
　　　　　　 window.location.href = objectUrl;  
 
       }).catch(function (res) {}); 

}
