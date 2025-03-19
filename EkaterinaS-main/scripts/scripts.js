'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

    /* 1. Динамическое перелистывание карточек в блоке "specialist__list" */
    const sliderLeft = document.querySelector('.sliderLeft');    // создаем переменную находя блок по классу
    const sliderRight = document.querySelector('.sliderRight');
    const cards = document.querySelector('.specialist__list')
    /* 
    *   Алгоритм
    *
    *   1. Начало
    *   2. Имеется 2 кнопки: влево и вправо
    *   3. Нажимаем на кнопки и ожидаем листание карточек
    *       3.1. Нажимаем на кнопку вправо
    *           3.1.1 Происходит листание карточек справа налево поочередно одна за другой    
    *       3.2. Нажимаем на кнопку влево 
    *           3.2.1. Происходит листание карточек слева направо поочередно
    *   4. Конец
    * 
    *   Блок-схема: /images/block-schema.png
    */
    if (sliderLeft) {
        console.log('Константа sliderLeft существует');
        sliderLeft.addEventListener("click", () => {
            console.log("Кнопка нажимается");
            let left = cards.style.getPropertyValue('left');
            if (left) {
                left = left.replace('px', '');
                left = parseInt(left);
            }
            else {
                left = 0;
            }
            if (left >= 0) {
                left = 0;
            } else {
                left = left + 1120;
            }
            console.log('left ' + left);
            cards.style.setProperty('left', left + 'px');
        })
    }
    if (sliderRight) {
        console.log('Константа sliderRight существует');
        sliderRight.addEventListener('click', () => {
            console.log('Кнопка нажимается');
            let width = 360 * 4;
            console.log('width' + width);
            /*let left = cards.style.getPropertryValue('left');
            if (left) {
                left = left.replace('px', '');
        }
                else {
                    left = 0;
                }
            left = perseInt(left) - 350;
            console.log('left ' + left);
            cards.stule.setProperty('left', left + 'px');*/
            let left = cards.style.getPropertyValue('left');
            if (left) {
                left = left.replace('px', '');
                left = parseInt(left);
            }
            else {
                left = 0;
            }
            if (left >= width - 1120) {
                left = width - 1120;
            } else {
                left = left - 1120;
            }
            console.log('left ' + left);
            cards.style.setProperty('left', left + 'px');
        })
    }
    console.log('Скрипт отработал корректно')
});