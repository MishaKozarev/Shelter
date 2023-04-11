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


//======================================================
// ================== POPUP ===========================
//======================================================
const popupBody = document.querySelector('.popup__body');
const popupBtn = document.querySelector('.popup__btn');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup__img');
const namePets = document.querySelector('.name');
const description = document.querySelector('.description');
const age = document.querySelector('.age');
const inoculations = document.querySelector('.inoculations');
const diseases = document.querySelector('.diseases');
const parasites = document.querySelector('.parasites');
const typeBreed = document.querySelector('.type-breed');

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


//======================================================
// ================== PAGINATION ===========================
//======================================================
const PAGINATION = document.querySelector('.pagination__content')
const activeItems = document.querySelector('.item-center');
const leftItems = document.querySelector('.item-left');
const rightItems = document.querySelector('.item-right');


// ------------- Creat Card -----------------------
const createCardTemplate = (src, name, num) => {
    const card = document.createElement("div");
    const imgCard = document.createElement("img");
    const cardText = document.createElement("h3");
    const cardBtn = document.createElement("button");
    card.classList.add("card");
    imgCard.classList.add("card__img");
    imgCard.src = src;
    cardText.classList.add("card__text");
    cardBtn.classList.add("card__btn");
    cardText.textContent = name;
    cardBtn.textContent = `${petsList[0].button}`
    card.append(imgCard, cardText, cardBtn);
    activeItems.append(card);

// ------------ Open popup ----------------
    function openPopup () {
        let num = 0
        popup.classList.add('active');
        popupBody.classList.add('active');
        removePopupScroll()
        popupImg.src = petsList[num].img
        namePets.textContent = petsList[num].name
        typeBreed.textContent = `${petsList[num].type} - ${petsList[num].breed}`
        description.textContent = petsList[num].description
        age.textContent = ` ${petsList[num].age}`
        inoculations.textContent = ` ${petsList[num].inoculations}`
        diseases.textContent = ` ${petsList[num].diseases}`
        parasites.textContent = ` ${petsList[num].parasites}`
    }
    card.addEventListener('click', openPopup)
return card;
}

//------------------- CREAT SLIDER---------------------

function createActiveItems() {
    activeItems.innerHTML = "";
    for (let i = 0; i < 8; i++) {
      let card = createCardTemplate(
        `${petsList[[i]].img}`,
        `${petsList[[i]].name}`,
        [i]
      );
      activeItems.appendChild(card);
    }
  }
  createActiveItems();

  function createRightItems() {
    rightItems.innerHTML = "";
    for (let i = 0; i < 8; i++) {
      let card = createCardTemplate(
        `${petsList[[i]].img}`,
        `${petsList[[i]].name}`
      );
      rightItems.appendChild(card);
    }
  }
  createRightItems();

  function createLeftItems() {
    leftItems.innerHTML = "";
    for (let i = 0; i < 8; i++) {
      let card = createCardTemplate(
        `${petsList[[i]].img}`,
        `${petsList[[i]].name}`
      );
      leftItems.appendChild(card);
    }
  }
  createLeftItems();


