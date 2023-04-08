const petsList =
[
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-hight500/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["none"],
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
        "inoculations": ["none"],
        "diseases": ["none"],
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
        "inoculations": ["none"],
        "diseases": ["kidney"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-hight500/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["leptospirosis"],
        "diseases": ["deafness"],
        "parasites": ["lice"]
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
// const type = document.querySelector('.type');
// const breed = document.querySelector('.breed');
const description = document.querySelector('.description');
const age = document.querySelector('.age');
const inoculations = document.querySelector('.inoculations');
const diseases = document.querySelector('.diseases');
const parasites = document.querySelector('.parasites');
const typeBreed = document.querySelector('.type-breed');



card1.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    createPopupContent0()

});
card2.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    createPopupContent1()

});
card3.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    createPopupContent2()

});
card4.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    createPopupContent3()

});
card5.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    createPopupContent4()

});
card6.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    createPopupContent5()

});
card7.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    createPopupContent6()

});
card8.addEventListener('click', ()=>{
    removeScroll();
    openPopup()
    createPopupContent7()

});


function createPopupContent0() {
    let i = 0;
    popupImg.src = petsList[i].img
    namePets.textContent = petsList[i].name
    typeBreed.textContent = `${petsList[i].type} - ${petsList[i].breed}`
    description.textContent = petsList[i].description
    age.textContent = ` ${petsList[i].age}`
    inoculations.textContent = ` ${petsList[i].inoculations}`
    diseases.textContent = ` ${petsList[i].diseases}`
    parasites.textContent = ` ${petsList[i].parasites}`

}
function createPopupContent1() {
    let i = 1;
    popupImg.src = petsList[i].img
    namePets.textContent = petsList[i].name
    typeBreed.textContent = `${petsList[i].type} - ${petsList[i].breed}`
    description.textContent = petsList[i].description
    age.textContent = ` ${petsList[i].age}`
    inoculations.textContent = ` ${petsList[i].inoculations}`
    diseases.textContent = ` ${petsList[i].diseases}`
    parasites.textContent = ` ${petsList[i].parasites}`
}
function createPopupContent2() {
    let i = 2;
    popupImg.src = petsList[i].img
    namePets.textContent = petsList[i].name
    typeBreed.textContent = `${petsList[i].type} - ${petsList[i].breed}`
    description.textContent = petsList[i].description
    age.textContent = ` ${petsList[i].age}`
    inoculations.textContent = ` ${petsList[i].inoculations}`
    diseases.textContent = ` ${petsList[i].diseases}`
    parasites.textContent = ` ${petsList[i].parasites}`
}
function createPopupContent3() {
    let i = 3;
    popupImg.src = petsList[i].img
    namePets.textContent = petsList[i].name
    typeBreed.textContent = `${petsList[i].type} - ${petsList[i].breed}`
    description.textContent = petsList[i].description
    age.textContent = ` ${petsList[i].age}`
    inoculations.textContent = ` ${petsList[i].inoculations}`
    diseases.textContent = ` ${petsList[i].diseases}`
    parasites.textContent = ` ${petsList[i].parasites}`
}
function createPopupContent4() {
    let i = 4;
    popupImg.src = petsList[i].img
    namePets.textContent = petsList[i].name
    typeBreed.textContent = `${petsList[i].type} - ${petsList[i].breed}`
    description.textContent = petsList[i].description
    age.textContent = ` ${petsList[i].age}`
    inoculations.textContent = ` ${petsList[i].inoculations}`
    diseases.textContent = ` ${petsList[i].diseases}`
    parasites.textContent = ` ${petsList[i].parasites}`
}
function createPopupContent5() {
    let i = 5;
    popupImg.src = petsList[i].img
    namePets.textContent = petsList[i].name
    typeBreed.textContent = `${petsList[i].type} - ${petsList[i].breed}`
    description.textContent = petsList[i].description
    age.textContent = ` ${petsList[i].age}`
    inoculations.textContent = ` ${petsList[i].inoculations}`
    diseases.textContent = ` ${petsList[i].diseases}`
    parasites.textContent = ` ${petsList[i].parasites}`
}
function createPopupContent6() {
    let i = 6;
    popupImg.src = petsList[i].img
    namePets.textContent = petsList[i].name
    typeBreed.textContent = `${petsList[i].type} - ${petsList[i].breed}`
    description.textContent = petsList[i].description
    age.textContent = ` ${petsList[i].age}`
    inoculations.textContent = ` ${petsList[i].inoculations}`
    diseases.textContent = ` ${petsList[i].diseases}`
    parasites.textContent = ` ${petsList[i].parasites}`
}
function createPopupContent7() {
    let i = 7;
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