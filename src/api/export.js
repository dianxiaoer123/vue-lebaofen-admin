import axios from 'axios'
import { getToken } from '@/utils/auth'

export function Export(url,data) {
//       axios.defaults.headers.common['Ticket'] = getToken();
//       axios.post(url,data,{responseType: 'blob', baseURL: process.env.BASE_API}).then((res) => {
// 			// let fileName = res.headers['content-disposition'];
// 			// console.log(fileName);
// 			// fileName = fileName.substring(fileName.indexOf("filename=") + 9);
// 			// console.log(fileName);
//             let blob = new Blob([res], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}); 
// 　　　　　　 let objectUrl = window.URL.createObjectURL(blob); 
//             console.log(objectUrl);
//              const a = document.createElement('a');
// 			 document.body.appendChild(a);
// 			 a.href = objectUrl;
// 			a.download = fileName;
// 			a.target = '_blank';
// 			a.click();
// 			a.remove(); //将a标签移除
//        }).catch(function (res) {}); 

      axios.defaults.headers.common['Ticket'] = getToken();
      axios.post(url,data,{responseType: 'arraybuffer', baseURL: process.env.BASE_API}).then((res) => {
            var str = JSON.stringify(res);
            let blob = new Blob([res], {type: "application/vnd.ms-excel"}); 
　　　　　　 let objectUrl = window.URL.createObjectURL(blob); 
            console.log(objectUrl);
// 　　　　　　  window.location.href = objectUrl;  
            
             const linkElement = document.createElement('a');
             linkElement.setAttribute('href', objectUrl);
             linkElement.setAttribute('download','');
             linkElement.click();
             document.getElementById("app").appendChild(linkElement);
 
       }).catch(function (res) {}); 
// axios.get('http://www.fqp360.com/manageapi/agent/export',{responseType: 'arraybuffer', baseURL: process.env.BASE_API}).then((res) => {
//       let blob = new Blob([res], {type: "application/vnd.ms-excel"}); 
// 　　　　　　 let objectUrl = URL.createObjectURL(blob); 
// 　　　　　　  window.location.href = objectUrl;  
// application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

//  }).catch(function (res) {}); 
}
