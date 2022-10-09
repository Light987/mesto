// определяем переменные
const profile = document.querySelector('.profile')
const profileInfo = profile.querySelector('.profile-info')
const profileName = profileInfo.querySelector('.profile-info__name')
const profileAbout = profileInfo.querySelector('.profile-info__about')
const editButton = profileInfo.querySelector('.profile-info__edit-button')
const profilePopup = document.querySelector('.profile-popup')
const popupForm = profilePopup.querySelector('.popup__form')
const popupAdd = document.querySelector('.popup-add')
const addPopupForm = popupAdd.querySelector('.popup-add__form')
const inputs = popupForm.querySelectorAll('input');
const inputsElement = addPopupForm.querySelectorAll('input');
const saveButtonAdd = popupAdd.querySelector('.popup-add__submit-button');
const closeButtonElement = popupAdd.querySelector('.popup-add__close-button');
const closeButton = profilePopup.querySelector('.popup__close-button');


const addElementButton = document.querySelector('.profile__add-button')
const elementList = document.querySelector('.elements__list')

const zoomImage = document.querySelector('.popup-image');
const zoomCloseImage = zoomImage.querySelector('.popup-image__close-button');

const zoomPopupImage = zoomImage.querySelector('.popup-image__image');
const zoomPopupTitle = zoomImage.querySelector('.popup-image__text');


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


function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

addElementButton.addEventListener('click', () => openPopup(popupAdd))
closeButtonElement.addEventListener('click', () => closePopup(popupAdd))
zoomCloseImage.addEventListener('click', () => closePopup(zoomImage))
closeButton.addEventListener('click', () => closePopup(profilePopup))


function profileOpenPopup() {
    openPopup(profilePopup);

    inputs[0].value = profileName.textContent
    inputs[1].value = profileAbout.textContent
}


editButton.addEventListener('click', profileOpenPopup)


function handleProfileFormSubmit(evt) {
    evt.preventDefault()

    profileName.textContent = inputs[0].value
    profileAbout.textContent = inputs[1].value
}

popupForm.addEventListener('submit', handleProfileFormSubmit)


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
        openPopup(zoomImage);
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


function handleElementFormSubmit(evt) {
    evt.preventDefault()

    const addElement = createCard(inputsElement[1].value, inputsElement[0].value);
    elementList.prepend(addElement);
    closePopup(popupAdd);
}


addPopupForm.addEventListener('submit', handleElementFormSubmit)
