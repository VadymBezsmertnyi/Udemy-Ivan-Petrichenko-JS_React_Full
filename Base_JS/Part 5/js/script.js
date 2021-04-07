/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1. I working
let reklama = document.querySelector('.promo__adv');
//console.log(reklama);
let reklamaImg = reklama.getElementsByTagName('img');
//console.log(reklamaImg);
for (let i = 0; i < reklamaImg.length;) {
  reklamaImg[i].remove();    
}
//console.log(reklamaImg);

// 2.
let genre = document.querySelector('.promo__genre');
//console.log(genre);
//console.log(genre.textContent);
genre.textContent = 'ДРАМА';
//console.log(genre.textContent);

// 3.
let promoBg = document.querySelector('.promo__bg');
//console.log(promoBg);
promoBg.style.backgroundImage = 'url("img/bg.jpg")';
//promoBg.style.backgroundImage = 'img/bg.jpg';

// 4.
movieDB.movies.sort();
//console.log(movieDB.movies);
let spisokFilms = document.querySelector('.promo__interactive-list');
//console.log(spisokFilms);
spisokFilms.innerHTML = "";
movieDB.movies.forEach((film, i) =>{
    spisokFilms.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
    </li>`;
});