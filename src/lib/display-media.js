// todo vísa í rétta hluti með import
import getRandomImage from './nasa-api';
let title; // titill fyrir mynd á forsíðu
let text; // texti fyrir mynd á forsíðu
let img; // mynd á forsíðu
let iframe;

let mynd; // object sem inniheldur núverandi típu á forsíðu.

export function getNewImage(result) {
    // type = result.media_type;
    let {media_type} = result;
    title = result.title;
    text = result.explanation;
    img = result.url;
    document.querySelector('.apod__title').innerHTML = title;
    document.querySelector('.apod__text').innerHTML = text;
    if (media_type == "video"){
        if (document.querySelector('.apod__image').hasAttribute('src')){
            document.querySelector('.apod__image').removeAttribute('src');
        }
        if (!(document.querySelector('.apod__video'))){
            iframe = document.createElement('iframe');
            iframe.setAttribute('class','apod__video');
            iframe.setAttribute('src',img);
            iframe.setAttribute('style','border:none;');
            iframe.setAttribute('height','480');
            iframe.setAttribute('width','854');
            document.querySelector('.apod').insertBefore(iframe, document.querySelector('.apod__image'));
        } else {
            document.querySelector('iframe').setAttribute('src',img);
        }
    } else {
        if ((document.querySelector('iframe'))) {
            iframe = document.querySelector('iframe');
            iframe.parentNode.removeChild(iframe);
        }
        document.querySelector('.apod__image').setAttribute('src',img);
    }
}

function saveCurrentImage() {
}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
export default function init(apod) {
    getRandomImage();
    mynd = document.getElementById("new-image-button");
    mynd.addEventListener('click',getRandomImage);
}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
export function loadFavourites() {

}
