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

/* Специалисты*/

const specialist__list = document.querySelector(".specialist");
if (specialist__list) {
    const dataSpecialist__name = [
        "Сергеев Сергей Сергеевич",
        "Егоров Егор Егорович",
        "Антонов Антон Антонович",
        "Васильев Василий Васильевич",
        "Евгеньева Евгения Евгеньевна",
        "Александрова Александра Александрова",
        "Градов Александр Андреевич, Софронова Екатерина Андреевна",
    ];
    const specialist__name =
        specialist__list.querySelectorAll(".specialist__name");

    specialist__name.forEach((item, index) => {
        item.textContent = dataSpecialist__name[index];
    });
}

/* ФОРМЫ */
/* ФОРМА ВХОДА */
const HeaderLogin = document.querySelector(".header__login");
const FormWindow = document.querySelector(".form-enter");

if (HeaderLogin && FormWindow) {
    HeaderLogin.addEventListener("click", () => {
        FormWindow.removeAttribute("hidden");
    });
}

// Закрытие модального окна при клике вне его области
window.addEventListener("click", (event) => {
    if (event.target === FormWindow) {
        FormWindow.setAttribute("hidden", true);
    }
});
//Закрытие модального окна при клике на кнопку закрытия
const closeButton = document.querySelector(".form__close");

closeButton.addEventListener("click", () => {
    FormWindow.setAttribute("hidden", true);
});


/* НАВИГАЦИОННОЕ МЕНЮ */
const headerMenu = document.querySelector('.header__menu');
if (headerMenu) {
    const headerList = headerMenu.querySelector('.menu');
    const menuData = {
        link1: {
            link: '#',
            title: 'Информационный модуль',
        },
        link2: {
            link: '#',
            title: 'Аналитический модуль',
        },
        link3: {
            link: '#',
            title: 'Модуль управления портфелем',
        },
        link4: {
            link: '#',
            title: 'Обучающий модуль',
        },
        link5: {
            link: '#',
            title: 'Модуль общения',
        }
    }
    const createLink = (UrlLink, title) => {
        const link = `
            <li class="header__item"><a href="${UrlLink}" class="menu__link">${title}</a></li>
            `;
        return link;
    }
    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.UrlLink, link.title);
        headerList.insertAdjacentHTML('beforeend', linkIndex);

    }
    console.log('Навигационное меню создано с помощью javascript!');
}

/* Задание 6 */
const menuContainer = document.querySelector('#menu');
if (menuContainer) {
    const menuList = menuContainer.querySelector('.menu');
    const apiUrl = 'data.json';
    const createItem = (linkUrl, title,) => {
        const item = `
            <li class="menu"<a class="menu__link" href="${linkUrl}">${title}</a></li>
        `;

        return item;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(typeof (data));
            data.forEach(item => {
                const headerItem = createItem(item.link, item.title,);
                menuList.insertAdjacentHTML('beforeend', headerItem);
            });
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
}
/* Предзагрузчик 6 */
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        // Показываем контент
        content.style.display = "block";

        // Удаляем элемент из DOM
        preloader.remove();
    }, 3000); // Задержка 3 секунды
}

