// определяем переменные
let profile = document.querySelector('.profile')
let profileInfo = profile.querySelector('.profile-info')
let profileName = profileInfo.querySelector('.profile-info__name')
let profileAbout = profileInfo.querySelector('.profile-info__about')
let editButton = profileInfo.querySelector('.profile-info__edit-button')
let popup = document.querySelector('.popup')
let popupForm = popup.querySelector('.popup__form')
let popupAdd = document.querySelector('.popup-add')
let addPopupForm = popupAdd.querySelector('.popup-add__form')
let inputs = popupForm.querySelectorAll('input');
let inputsElement = addPopupForm.querySelectorAll('input');
let saveButtonAdd = popupAdd.querySelector('.popup-add__submit-button');
let closeButton = popup.querySelector('.popup__close-button');
let closeButtonElement = popupAdd.querySelector('.popup-add__close-button');


let addElementButton = document.querySelector('.profile__add-button')
let elementList = document.querySelector('.elements__list')

let zoomImage = document.querySelector('.popup-image');
let zoomCloseImage = zoomImage.querySelector('.popup-image__close-button');

let zoomPopupImage = zoomImage.querySelector('.popup-image__image');
let zoomPopupTitle = zoomImage.querySelector('.popup-image__text');


const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];


function addElement() {
    popupAdd.classList.add('popup_opened')
}

addElementButton.addEventListener('click', addElement)

function closePopupAdd() {
    popupAdd.classList.remove('popup_opened')
}

closeButtonElement.addEventListener('click', closePopupAdd)
saveButtonAdd.addEventListener('click', closePopupAdd)

function closePopupImage() {
    zoomImage.classList.remove('popup_opened')
}

zoomCloseImage.addEventListener('click', closePopupImage)


function openPopup() {
    popup.classList.add('popup_opened')

    inputs[0].value = profileName.textContent
    inputs[1].value = profileAbout.textContent
}


editButton.addEventListener('click', openPopup)


function closePopup() {
    popup.classList.remove('popup_opened')
}

closeButton.addEventListener('click', closePopup)

function formSubmit(evt) {
    evt.preventDefault()

    profileName.textContent = inputs[0].value
    profileAbout.textContent = inputs[1].value
}

popupForm.addEventListener('submit', formSubmit)


function createCard(link, name) {
    const elementTemplate = document.querySelector('#element').content;
    const newItem = elementTemplate.cloneNode(true);
    const elementImg = newItem.querySelector('.element__image');
    const elementTitle = newItem.querySelector('.element__title');

    elementImg.src = link;
    elementImg.alt = name;
    elementTitle.textContent = name;


    const elementLike = newItem.querySelector('.element__like');
    elementLike.addEventListener('click', function (event) {
        event.target.classList.toggle('element__like_active');
    });

    const elementDelete = newItem.querySelector('.element__delete');
    elementDelete.addEventListener('click', function (event) {
        event.target.closest('.element').remove();
    });


    elementImg.addEventListener('click', function () {
        zoomImage.classList.add('popup_opened');
        zoomPopupImage.src = link;
        zoomPopupImage.alt = name;
        zoomPopupTitle.textContent = name;
    });
    return newItem;
}

initialCards.forEach((card) => {
    const newCard = createCard(card.link, card.name);
    elementList.append(newCard);
});


function postElement(evt) {
    evt.preventDefault()

    const addElement = createCard(inputsElement[1].value, inputsElement[0].value);
    elementList.prepend(addElement);
}


addPopupForm.addEventListener('submit', postElement)
