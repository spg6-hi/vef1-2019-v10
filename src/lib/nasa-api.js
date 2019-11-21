import {randomNumber} from './helpers';
import {getNewImage} from './display-media';
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'wkraH08phFDPgKOqpUVfbdLUfKbS4prBQ7HtzZvA';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
    const yy = randomNumber(1995, 2019);
    let mm = randomNumber(1, 12);
    let lastDay = 31;
    let firstDay = 1;
    let dd = randomNumber(firstDay, lastDay);
    let DATE = (`${yy}-${mm}-${dd}`);
    switch(yy){
        case(2019):
            mm = randomNumber(1, 11);
            switch(mm){
                case(11):
                    lastDay = 22;
            }
            break;
        case(1995):
            mm = randomNumber(6, 12);
            switch(mm){
                case(6):
                    firstDay = 16;
                    lastDay = 30;
                    break;
            }
            break;
    }
    if(mm = 2 && yy % 4 == 0){
        lastDay = 29;
    } else{
        lastDay = 28;
    }
    if(mm == 4 || mm == 6 || mm == 9 || mm == 11){
        lastDay == 30;
    }


    fetch(`${URL}?api_key=${API_KEY}&date=${DATE}`)
    .then((result) => {
        if (!result.ok) {
            throw new Error('Non 200 status');
        }
        return result.json();
    })
    .then(result => {
        getNewImage(result);
    })
    .catch(error => {console.log(`Villa með gögn ${error}`)})

}
