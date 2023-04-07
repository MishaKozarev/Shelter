console.log('1)Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14;\n2)Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14; \n3)Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14; \n4)Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6;\n5)Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6;\n6)Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6;\n7)Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20;\n8)Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8;\n9)При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n(Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется);\n10)Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8');

/*Бургер меню*/
const menu = document.querySelector('.menu');
const iconBurger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__row');
const body = document.querySelector('body');
const linksBurger = document.querySelectorAll('.menu__link');


iconBurger.addEventListener('click', ()=>{
    removeScroll();
    addMenuList();
    menu.classList.toggle('active');
    iconBurger.classList.toggle('active');
});

menu.addEventListener('click', ()=>{
    iconBurger.classList.remove('active');
    menu.classList.remove('active');
    menuList.classList.remove('active');
    body.classList.remove('active');
});


function addMenuList() {
    if (!iconBurger.classList.contains('active')) {
        menuList.classList.add('active');

    } else {
        menuList.classList.remove('active');
    }
}
function removeScroll() {
    if (!iconBurger.classList.contains('active')) {
        body.classList.add('active');
    } else {
        body.classList.remove('active');
    }
}

linksBurger.forEach(link =>{
    link.addEventListener('click', ()=>{
        menu.classList.remove('active');
        iconBurger.classList.remove('active');
        menuList.classList.remove('active');
        body.classList.remove('active');
    });
  })