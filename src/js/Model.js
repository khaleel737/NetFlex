'use strict';

import { AJAX } from './Helpers.js';
import { API_URL, KEY } from './Config.js'

/**
 * 
 * @append_to_response {
 * With append_to_response you can issue a single request:

https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos
Even more powerful, you can issue multiple requests, just comma separate the values:

https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos,images
} Movies 
 * @Search {https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
} timeWindow 
 */

const loadMovieDB = async function (language, adult = false, video = true) {
    try {
        const movieDBDiscover = await AJAX(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=${language}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)

        const data = movieDBDiscover.results;

        console.log(data);


    } catch (err) {
        console.log(err);
    }

}

loadMovieDB('en-US', false, true)


export default loadMovieDB;