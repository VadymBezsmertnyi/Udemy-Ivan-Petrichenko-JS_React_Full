// 1 touchstart
// 2 touchmove
// 3 touchend
// 4 touchenter
// 5 touchleave
// 6 touchcancel

'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) =>{
        e.preventDefault();
        console.log('Start');      
        //console.log(e.touches); 
        console.log(e.targetTouches[0].pageX);
        console.log(e.changedTouches);
    });

/*     box.addEventListener('touchmove', (e) =>{
        e.preventDefault();
        console.log('Move');
    });

    box.addEventListener('touchend', (e) =>{
        e.preventDefault();
        console.log('End');
    }); */
});