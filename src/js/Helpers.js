import { TIME_OUT } from './Config.js'


const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };


//   export const AJAX = async function (url, uploadData = undefined) {
//     try {

//     const fetchPro = uploadData ? fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(uploadData),
//     }) : fetch(url);

//       const res = await Promise.race([fetchPro, timeout(TIME_OUT)]);
//       const data = await res.json();
      
//       console.log(res);
//       console.log(data);
      
//       if(!res.ok) throw new Error(`${data.message} ${res.status}`)
//       return data;
//   } catch (err) {
//       // console.error(err);
//       // Throw the error to the Model.js file
//       throw (err);
//   }
//   }


// const timeout = function (sec) {
//     return new Promise(function(_, reject) {
//         setTimeout(function() {
//             reject(new Error(`Request took too long and ended after ${sec}`))
//         }, sec * 1000)
//     })
// }


export const AJAX = async function (url = '', data = undefined) {
    try {
        const fetchURL =  data ? fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }) : fetch(url)


        const response = await Promise.race([fetchURL, timeout(TIME_OUT)])
        const movieData = await response.json()

          if(!response.ok) throw new Error(`${movieData.message} ${response.status}`)
          return movieData; // parses JSON response into native JavaScript objects
    
    } catch (err){
        
       throw (err);
    }
}

