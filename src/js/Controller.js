'use strict';

import { AJAX } from './Helpers.js';
import { API_URL, KEY } from './Config.js'
// import 'regenerator-runtime/runtime'
// import { parser } from 'posthtml-parser'
import fs from 'fs'
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

        const sliderMaker = testingAll.results.map(trending => {
           const allSlider = slider.forEach(slide => {
               const trendingSlider = `<div style="background-image: url('https://image.tmdb.org/t/p/w500/${trending.backdrop_path}');" class='Trending boxes'><h3>${trending.original_title}</h3></div>`               
               slide.insertAdjacentHTML('afterbegin', trendingSlider)
            })
        });



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