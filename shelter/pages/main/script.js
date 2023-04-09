console.log('1)Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14;\n2)Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14; \n3)Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14; \n4)Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6;\n5)Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6;\n6)Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6;\n7)Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20;\n8)Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): +8;\n9)При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n(Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется);\n10)Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8');
const petsList =
[
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-hight500/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-hight500/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-hight500/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-hight500/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-hight500/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-hight500/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-hight500/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

    {
        "name": "Freddie",
        "img": "../../assets/images/pets-hight500/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    }
  ]
/*Бургер меню*/
const menu = document.querySelector('.menu');
const iconBurger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__row');
const body = document.querySelector('body');
const linksBurger = document.querySelectorAll('.burger-link');

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
    if ((!iconBurger.classList.contains('active')))  {
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



//Popup
const popupBody = document.querySelector('.popup__body');
const popupBtn = document.querySelector('.popup__btn');
const popup = document.querySelector('.popup');
const cards = document.querySelectorAll('.card');
const card1 = document.querySelector('.card__one');
const card2 = document.querySelector('.card__two');
const card3 = document.querySelector('.card__three');
const card4 = document.querySelector('.card__four');
const card5 = document.querySelector('.card__five');
const card6 = document.querySelector('.card__six');
const card7 = document.querySelector('.card__seven');
const card8 = document.querySelector('.card__eight');
const popupImg = document.querySelector('.popup__img');
const namePets = document.querySelector('.name');
const description = document.querySelector('.description');
const age = document.querySelector('.age');
const inoculations = document.querySelector('.inoculations');
const diseases = document.querySelector('.diseases');
const parasites = document.querySelector('.parasites');
const typeBreed = document.querySelector('.type-breed');
let i = 0;




// Slider

const btnLeft = document.querySelector('.slider__btn-prev')
const btnRight = document.querySelector('.slider__btn-next')
const CAROUSEL = document.querySelector('.slider__content')
const pageLeft = document.querySelector('.prev-page')
const pageCurrent = document.querySelector('.current-page')
const pageRight = document.querySelector('.next-page')


const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
}
const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
}


// const createCardTemplate = () => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     return card;
//   }
// changedItem.innerHTML = "";
//   for (let i = 0; i < 3; i++) {
//     const card = createCardTemplate();
//     card.innerText = Math.floor(Math.random() * 8);
//     changedItem.appendChild(card);
//   }

CAROUSEL.addEventListener('animationend', (animationEvent)=>{
    if (animationEvent.animationName === 'move-left') {
        CAROUSEL.classList.remove('transition-left');
        const leftItems = pageLeft.innerHTML;
        pageCurrent.innerHTML = leftItems;

        // const car1 = createCardTemplate();
        // car1.innerText = Math.floor(Math.random() * 8)

        // const car2 = createCardTemplate();
        // car2.innerText = Math.floor(Math.random() * 8)

        // const car3 = createCardTemplate();
        // car3.innerText = Math.floor(Math.random() * 8)

        pageLeft.innerHTML = '';
        pageLeft.appendChild(card7)
        pageLeft.appendChild(card8)
        pageLeft.appendChild(card1)

    } else {
        CAROUSEL.classList.remove('transition-right');
        const rightItems = pageRight.innerHTML;
        pageCurrent.innerHTML = rightItems

        pageRight.innerHTML = '';
        pageRight.appendChild(card4)
        pageRight.appendChild(card5)
        pageRight.appendChild(card6)

    }
});
btnRight.addEventListener('click', moveRight);
btnLeft.addEventListener('click', moveLeft);


card1.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    createPopupContent()

});
card2.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    i = 1
    createPopupContent()

});
card3.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    i = 2
    createPopupContent()

});
card4.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    i = 3
    createPopupContent()

});
card5.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    i = 4
    createPopupContent()

});
card6.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    i = 5
    createPopupContent()

});
card7.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    i = 6
    createPopupContent()

});
card8.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    i = 7
    createPopupContent()

});


function createPopupContent() {
    popupImg.src = petsList[i].img
    namePets.textContent = petsList[i].name
    typeBreed.textContent = `${petsList[i].type} - ${petsList[i].breed}`
    description.textContent = petsList[i].description
    age.textContent = ` ${petsList[i].age}`
    inoculations.textContent = ` ${petsList[i].inoculations}`
    diseases.textContent = ` ${petsList[i].diseases}`
    parasites.textContent = ` ${petsList[i].parasites}`

}

function openPopup() {
    popup.classList.add('active');
    popupBody.classList.add('active');
}

popupBtn.addEventListener('click', ()=>{
    removeScroll();
    popup.classList.remove('active');
    popupBody.classList.remove('active');
    body.classList.remove('active');

});
popupBody.addEventListener('click', ()=>{
    removeScroll();
    popup.classList.remove('active');
    popupBody.classList.remove('active');
    body.classList.remove('active');

});
function removePopupScroll() {
    if (popup.classList.contains('active'))  {
        body.classList.add('active');
    } else {
        body.classList.remove('active');
    }
}

