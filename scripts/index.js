import {initialCards, Card} from './Card.js'
import {selectors, FormValidator} from './FormValidator.js'

// определяем переменные
const profile = document.querySelector('.profile')
const profileInfo = profile.querySelector('.profile-info')
const profileName = profileInfo.querySelector('.profile-info__name')
const profileAbout = profileInfo.querySelector('.profile-info__about')
const profileButton = profileInfo.querySelector('.profile-info__edit-button')
const profilePopup = document.querySelector('.profile-popup')
const popupForm = profilePopup.querySelector('.popup__form')
const popupFieldName = popupForm.querySelector('.popup__field_name');
const popupFieldAbout = popupForm.querySelector('.popup__field_about');
const popupCloseButton = profilePopup.querySelector('.popup__close-button');
const popupCloseOverlay = document.querySelector('.popup__overlay')

const popupAdd = document.querySelector('.popup-add')
const popupAddForm = popupAdd.querySelector('.popup-add__form')
const popupAddTitle = popupAddForm.querySelector('.popup-add__title');
const popupAddLink = popupAddForm.querySelector('.popup-add__link');
const popupAddCloseButton = popupAdd.querySelector('.popup-add__close-button');
const popupAddCloseOverlay = document.querySelector('.popup-add__overlay')
const profileAddButton = document.querySelector('.profile__add-button');

const zoomImage = document.querySelector('.popup-image');
const popupImageCloseOverlay = document.querySelector('.popup-image__overlay')
const zoomCloseImage = zoomImage.querySelector('.popup-image__close-button');
const zoomPopupImage = zoomImage.querySelector('.popup-image__image');
const zoomPopupTitle = zoomImage.querySelector('.popup-image__text');

const elementList = document.querySelector('.elements__list');

const selectImage = {
    elm: zoomImage,
    close: zoomCloseImage,
    closeOverlay: popupImageCloseOverlay,
    src: zoomPopupImage,
    title: zoomPopupTitle
}

new FormValidator(selectors, '.popup-add__form').enableValidation()
new FormValidator(selectors, '.popup-form__profile').enableValidation()

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
};


function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}


profileAddButton.addEventListener('click', () => openPopup(popupAdd))
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd))
popupAddCloseOverlay.addEventListener('mousedown', () => closePopup(popupAdd))
popupCloseButton.addEventListener('click', () => closePopup(profilePopup))
popupCloseOverlay.addEventListener('mousedown', () => closePopup(profilePopup))


function openProfilePopup() {
    openPopup(profilePopup);

    popupFieldName.value = profileName.textContent
    popupFieldAbout.value = profileAbout.textContent
}


profileButton.addEventListener('click', openProfilePopup)


function handleProfileFormSubmit(evt) {
    evt.preventDefault()

    profileName.textContent = popupFieldName.value
    profileAbout.textContent = popupFieldAbout.value
}

popupForm.addEventListener('submit', handleProfileFormSubmit)


initialCards.forEach((data) => {
    const card = new Card(data, '#element', selectImage);
    const cardElement = card.generateCard();
    elementList.append(cardElement);
});


function handleElementFormSubmit(evt) {
    evt.preventDefault()

    const addElement = new Card({
        link: popupAddLink.value,
        name: popupAddTitle.value
    }, '#element', selectImage).generateCard();
    elementList.prepend(addElement);
}


popupAddForm.addEventListener('submit', handleElementFormSubmit)