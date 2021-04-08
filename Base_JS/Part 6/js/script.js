/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", () =>{
    //console.log("Loaded....");
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          filmInput = document.querySelector('.adding__input'),
          bts = document.querySelector('button'),
          chbox = document.querySelector('[type="checkbox"]'),
          del = document.querySelectorAll('.delete');
          

    // 1. I work
    bts.addEventListener('click', (e)=>{
        e.preventDefault();

        let filmInputText = filmInput.value,
            filmInputTextLength =  filmInputText.length,
            chboxFavorit = chbox.checked;
        
        // 2. I work
        if (filmInputTextLength > 21){
            filmInputText = `${filmInputText.substring(0, 21)}...`;
        }
        // 4. I work
        if (chboxFavorit){
            console.log('Добавляем любимый фильм');
        }

        movieDB.movies.push(filmInputText.toLocaleUpperCase());
        movieList.innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach((film, i) =>{
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}
                <div class="delete"></div>
            </li>
        `;
    });
    // 3. I work
    
    });
          

    adv.forEach(item => {
        item.remove();
    });
    
    genre.textContent = 'Драма';
    
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    
    movieList.innerHTML = "";
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) =>{
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}
                <div class="delete"></div>
            </li>
        `;
    });
});
