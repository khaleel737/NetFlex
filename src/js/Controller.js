'use strict';

import { AJAX } from './Helpers.js';
import { API_URL, KEY } from './Config.js'
// import 'regenerator-runtime/runtime'
// import { parser } from 'posthtml-parser'
// import fs from 'fs'
// import * as Model  from './Model';


export const loadRecipe = async function (Movies, timeWindow) {

    try {

        // const data = await AJAX(`${API_URL}/trending/${Movies}/${timeWindow}?api_key=${KEY}`);

        // console.log(data)

        const dataTwo = await AJAX(`${API_URL}/trending/${'all'}/${'day'}?api_key=${KEY}`);

        console.log(dataTwo)

        console.log('THIS IS BULLSHIT ON BUTTER')

        const testingAll = await AJAX(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=de-DE&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)

        console.log(testingAll);

        const slider = document.querySelectorAll('.slider-flex');

        // const sliderMaker = testingAll.results.map(trending => {
        //    const allSlider = slider.forEach(slide => {
        //        const trendingSlider = `<div style="background-image: url('https://image.tmdb.org/t/p/w500/${trending.backdrop_path}');" class='Trending boxes'><h3>${trending.original_title}</h3></div>`               
        //        slide.insertAdjacentHTML('afterbegin', trendingSlider)
        //     })
        // });



                const sliderMaker = testingAll.results.map(trending => {
           const allSlider = slider.forEach(slide => {
               const trendingSlider = ` <div class="card-style boxes">  
               <div style="background-image: url('https://image.tmdb.org/t/p/w500/${trending.backdrop_path}');" class='image-display'>
                   </div>
                   <div class="lower-section inactive">
                   <div class="card-buttons inactive">
                   <div class="first-three-buttons inactive">
                       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <a href="https://developer.mozilla.org/">
                           <path d="M8.22852 6.17145L18.5142 11.6572L8.22852 17.1429V6.17145Z" fill="white"/>
                           <circle cx="12" cy="12" r="11.5" stroke="white"/>
                           </svg>
       
                           <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <a href="https://developer.mozilla.org/">
                               <g clip-path="url(#clip0_2_2)">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.125C6.41711 22.125 1.875 17.5829 1.875 12C1.875 6.41711 6.41711 1.875 12 1.875C17.5829 1.875 22.125 6.41711 22.125 12C22.125 17.5829 17.5829 22.125 12 22.125ZM17.1562 11.0616H12.9375V6.84283H11.0625V11.0616H6.84375V12.9366H11.0625V17.1553H12.9375V12.9366H17.1562V11.0616Z" fill="white"/>
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C15.2053 0 18.2188 1.24823 20.4853 3.51471C22.7518 5.78119 24 8.79474 24 12C24 15.2053 22.7518 18.2188 20.4853 20.4853C18.2188 22.7518 15.2053 24 12 24C8.79474 24 5.78119 22.7518 3.51471 20.4853C1.24823 18.2188 0 15.2053 0 12C0 8.79474 1.24823 5.78119 3.51471 3.51471C5.78119 1.24823 8.79474 0 12 0ZM1.875 12C1.875 17.5829 6.41711 22.125 12 22.125C17.5829 22.125 22.125 17.5829 22.125 12C22.125 6.41711 17.5829 1.875 12 1.875C6.41711 1.875 1.875 6.41711 1.875 12Z" fill="white"/>
                               </g>
                               <defs>
                               <clipPath id="clip0_2_2">
                               <rect width="30" height="30" fill="white"/>
                               </clipPath>
                               </defs>
                               </svg>
       
                               <!-- LIKE -->
                               <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <a href="https://developer.mozilla.org/">
                                   <path d="M7.5 15.0597C7.5 14.1063 8.27293 13.3333 9.2264 13.3333C10.0223 13.3333 10.7413 12.8577 11.0526 12.1252L12.9337 7.69909C12.985 7.57838 13.1034 7.5 13.2346 7.5C13.9252 7.5 14.4611 8.10244 14.3808 8.78831L14.1994 10.3357C14.0852 11.3105 14.8469 12.1667 15.8283 12.1667H16.4395C18.1004 12.1667 19.2996 13.7564 18.8433 15.3535L18.2242 17.5201C17.9176 18.5934 16.9366 19.3333 15.8204 19.3333H10C8.61929 19.3333 7.5 18.214 7.5 16.8333V15.0597ZM9.2264 12.3333C7.72065 12.3333 6.5 13.554 6.5 15.0597V16.8333C6.5 18.7663 8.067 20.3333 10 20.3333H15.8204C17.3831 20.3333 18.7565 19.2974 19.1858 17.7949L19.8048 15.6282C20.4436 13.3923 18.7648 11.1667 16.4395 11.1667H15.8283C15.4453 11.1667 15.148 10.8325 15.1926 10.4521L15.374 8.9047C15.524 7.62448 14.5236 6.5 13.2346 6.5C12.7023 6.5 12.2215 6.81807 12.0133 7.30795L10.1322 11.7341C9.97782 12.0974 9.62121 12.3333 9.2264 12.3333ZM26.9167 13.7083C26.9167 21.0031 21.0031 26.9167 13.7083 26.9167C6.41357 26.9167 0.5 21.0031 0.5 13.7083C0.5 6.41357 6.41357 0.5 13.7083 0.5C21.0031 0.5 26.9167 6.41357 26.9167 13.7083Z" stroke="white"/>
                                   </svg>
                           </div>
                   <div>
                       <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <a href="https://developer.mozilla.org/">
                           <path d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12ZM11 18V11H13V18H11ZM12 9.25C11.8368 9.2516 11.675 9.22018 11.5243 9.15762C11.3736 9.09507 11.2371 9.00267 11.123 8.886C11.0025 8.77246 10.9071 8.63499 10.8429 8.48241C10.7786 8.32984 10.747 8.16552 10.75 8C10.75 7.652 10.873 7.356 11.122 7.114C11.369 6.872 11.662 6.75 12 6.75C12.337 6.75 12.63 6.872 12.877 7.114C13.125 7.356 13.25 7.652 13.25 8C13.25 8.348 13.126 8.644 12.877 8.886C12.7629 9.00267 12.6264 9.09507 12.4757 9.15762C12.325 9.22018 12.1632 9.2516 12 9.25Z" fill="white"/>
                           </svg>                            
                   </div>
               </div>
               <h3>TV-MOV 2H HD</h3>
               <!-- Movie Genre -->
               <h3 class="movie-genre">
                   ${trending.original_title}
               </h3>
           </div>
       </div>`               
               slide.insertAdjacentHTML('afterbegin', trendingSlider)
            })
        });

//         <div class="card-style">  
//         <div style="background-image: url('https://image.tmdb.org/t/p/w500//iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg');" class='image-display'>
//             <!-- <h2>Trending</h2> -->
//             </div>
//             <div class="lower-section">
//             <div class="card-buttons">
//             <div class="first-three-buttons">
//                 <!-- PLAY -->
//                 <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8.22852 6.17145L18.5142 11.6572L8.22852 17.1429V6.17145Z" fill="white"/>
//                     <circle cx="12" cy="12" r="11.5" stroke="white"/>
//                     </svg>

//                     <!-- ADD -->
//                     <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <g clip-path="url(#clip0_2_2)">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.125C6.41711 22.125 1.875 17.5829 1.875 12C1.875 6.41711 6.41711 1.875 12 1.875C17.5829 1.875 22.125 6.41711 22.125 12C22.125 17.5829 17.5829 22.125 12 22.125ZM17.1562 11.0616H12.9375V6.84283H11.0625V11.0616H6.84375V12.9366H11.0625V17.1553H12.9375V12.9366H17.1562V11.0616Z" fill="white"/>
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C15.2053 0 18.2188 1.24823 20.4853 3.51471C22.7518 5.78119 24 8.79474 24 12C24 15.2053 22.7518 18.2188 20.4853 20.4853C18.2188 22.7518 15.2053 24 12 24C8.79474 24 5.78119 22.7518 3.51471 20.4853C1.24823 18.2188 0 15.2053 0 12C0 8.79474 1.24823 5.78119 3.51471 3.51471C5.78119 1.24823 8.79474 0 12 0ZM1.875 12C1.875 17.5829 6.41711 22.125 12 22.125C17.5829 22.125 22.125 17.5829 22.125 12C22.125 6.41711 17.5829 1.875 12 1.875C6.41711 1.875 1.875 6.41711 1.875 12Z" fill="white"/>
//                         </g>
//                         <defs>
//                         <clipPath id="clip0_2_2">
//                         <rect width="30" height="30" fill="white"/>
//                         </clipPath>
//                         </defs>
//                         </svg>

//                         <!-- LIKE -->
//                         <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M7.5 15.0597C7.5 14.1063 8.27293 13.3333 9.2264 13.3333C10.0223 13.3333 10.7413 12.8577 11.0526 12.1252L12.9337 7.69909C12.985 7.57838 13.1034 7.5 13.2346 7.5C13.9252 7.5 14.4611 8.10244 14.3808 8.78831L14.1994 10.3357C14.0852 11.3105 14.8469 12.1667 15.8283 12.1667H16.4395C18.1004 12.1667 19.2996 13.7564 18.8433 15.3535L18.2242 17.5201C17.9176 18.5934 16.9366 19.3333 15.8204 19.3333H10C8.61929 19.3333 7.5 18.214 7.5 16.8333V15.0597ZM9.2264 12.3333C7.72065 12.3333 6.5 13.554 6.5 15.0597V16.8333C6.5 18.7663 8.067 20.3333 10 20.3333H15.8204C17.3831 20.3333 18.7565 19.2974 19.1858 17.7949L19.8048 15.6282C20.4436 13.3923 18.7648 11.1667 16.4395 11.1667H15.8283C15.4453 11.1667 15.148 10.8325 15.1926 10.4521L15.374 8.9047C15.524 7.62448 14.5236 6.5 13.2346 6.5C12.7023 6.5 12.2215 6.81807 12.0133 7.30795L10.1322 11.7341C9.97782 12.0974 9.62121 12.3333 9.2264 12.3333ZM26.9167 13.7083C26.9167 21.0031 21.0031 26.9167 13.7083 26.9167C6.41357 26.9167 0.5 21.0031 0.5 13.7083C0.5 6.41357 6.41357 0.5 13.7083 0.5C21.0031 0.5 26.9167 6.41357 26.9167 13.7083Z" stroke="white"/>
//                             </svg>
//                     </div>
//             <div>
//                 <!-- Details -->
//                 <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12ZM11 18V11H13V18H11ZM12 9.25C11.8368 9.2516 11.675 9.22018 11.5243 9.15762C11.3736 9.09507 11.2371 9.00267 11.123 8.886C11.0025 8.77246 10.9071 8.63499 10.8429 8.48241C10.7786 8.32984 10.747 8.16552 10.75 8C10.75 7.652 10.873 7.356 11.122 7.114C11.369 6.872 11.662 6.75 12 6.75C12.337 6.75 12.63 6.872 12.877 7.114C13.125 7.356 13.25 7.652 13.25 8C13.25 8.348 13.126 8.644 12.877 8.886C12.7629 9.00267 12.6264 9.09507 12.4757 9.15762C12.325 9.22018 12.1632 9.2516 12 9.25Z" fill="white"/>
//                     </svg>                            
//             </div>
//         </div>
//           <!-- Duration -->
//         <h2>TV-MOV 2H HD</h2>
//         <!-- Movie Genre -->
//         <h2 class="movie-genre">
//             Relaxing | Witty | Food & Romance
//         </h2>
//     </div>
// </div>



// const html = fs.readFileSync('path/to/index.html', 'utf-8')

// console.log(parser(html)) // Logs a PostHTML AST

        // const sliderMaker = testingAll.results.map(trending => {
        //     const allSlider = slider.forEach(slide => {
        //         const trendingSlider = `<section class="categories-for-you h3-title">
        //         <div>
        //         <h3>${'This is testing'}</h3>
        //         </div>
        //         <div class="categories-slider">
        //         <div class="slider-flex">
        //         <div style="background-image: url('https://image.tmdb.org/t/p/w500/${trending.backdrop_path}');" class='Trending boxes'><h3>${trending.original_title}</h3></div>
        //         </div>
        //         </div>
        //         </section>`               
        //         slide.insertAdjacentHTML('afterend', trendingSlider)
        //      })
        //  });



    //     <section class="categories-for-you h3-title">
    //     <div>
    //         <h3>`${This is testing}`</h3>
    //     </div>
    //     <div class="categories-slider">
    //         <div class="slider-flex">
    //         <div style="background-image: url('https://image.tmdb.org/t/p/w500/${trending.backdrop_path}');" class='Trending boxes'><h3>${trending.original_title}</h3></div>
    //     </div>
    // </div>
    // </section>


        // document.querySelectorAll('.boxes').forEach(box => {

        //   box.addEventListener('mouseover', function () {
        //     box.classList.add("boxes-new")
        //   })
        //   console.log(box)
        // })


    } catch (err) {
        // Temp error handling
        console.error(`😵 ${err} 😵`);
        throw err;
    }

}

loadRecipe('all', 'day')
// loadRecipe('all', 'week')


// let button = document.querySelector('.button');
// let testA = document.querySelector('a');
// let backgroundButton = document.querySelector('.background__button');

//   button.addEventListener('mouseenter', function(){
//     testA.classList.add('is-white')
//     backgroundButton.classList.add('is-hover');
//   });

//   button.addEventListener('mouseleave', function(){
//     testA.classList.remove('is-white')
//     backgroundButton.classList.remove('is-hover');
//   });