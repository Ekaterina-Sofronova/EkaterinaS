'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')

    /* 1. Динамическое перелистывание карточек в блоке "specialist__list" */
    const slider__left = document.querySelector('slider__left');    // создаем переменную находя блок по классу
    const slider__right = document.querySelector('slider__right');
    const cards = document/getEllementById('specialist__list')
        /* 
        *   Алгоритм
        *
        *   1. Начало
        *   2. Имеется 2 кновки: влево и вправо
        *   3. Нажимаем на кнопки и ожидаем листание карточек
        *       3.1. Нажимаем на кнопку вправо
        *           3.1.1 Происходит листание карточек справа налево поочередно одна за другой    
        *       3.2. Нажимаем на кнопку влево 
        *           3.2.1. Происходит листание карточек слева направо поочерено
        *   4. Конец
        * 
        *   Блок-схема: /images/block-schema.png
        */
        If (slider__left) {
            console.log('Константа slider __left существует');
            slider__left.addEventListener("click", () -> {
            console.log("Кнопка нажимается");
            let left - cards. style.getPropertyValue('left');
            if (left) {
                left - left.replace('px', '');
                left - parseint(left);
            }
            else {
                left = 0;
            }
            if (left<720)
            {
                left = 0;
            } else {
                left=left + 720;
            }
            console.log('left ' + left);
})
