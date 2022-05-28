'use strict';

import { AJAX } from './Helpers.js';
import { API_URL, KEY } from './Config.js'
// import 'regenerator-runtime/runtime'

// import * as Model  from './Model';


export const loadRecipe = async function (Movies, timeWindow) {

    try {

        // const data = await AJAX(`${API_URL}/trending/${Movies}/${timeWindow}?api_key=${KEY}`);

        // console.log(data)

        const dataTwo = await AJAX(`${API_URL}/trending/${'all'}/${'week'}?api_key=${KEY}`);

        console.log(dataTwo)



        const testingAll = await AJAX(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)

        console.log(testingAll);

        const slider = document.querySelectorAll('.slider-flex');

        const sliderMaker = testingAll.results.map(trending => {
           const allSlider = slider.forEach(slide => {
               const trendingSlider = `<div style="background-image: url('https://image.tmdb.org/t/p/w500/${trending.backdrop_path}');" class='Trending boxes'><h3>${trending.original_title}</h3></div>`               
               slide.insertAdjacentHTML('afterbegin', trendingSlider)
            })
        });


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