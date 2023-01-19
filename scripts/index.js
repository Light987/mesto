import {initialCards, validationConfig} from './constants.js'
import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js'

// определяем переменные
const profile = document.querySelector('.profile')
const profileInfo = profile.querySelector('.profile-info')
const profileName = profileInfo.querySelector('.profile-info__name')
const profileAbout = profileInfo.querySelector('.profile-info__about')
const profileButton = profileInfo.querySelector('.profile-info__edit-button')
const profilePopup = document.querySelector('.profile-popup')
const popupProfileForm = profilePopup.querySelector('.popup__form_profile')
const popupProfileFieldName = popupProfileForm.querySelector('.popup__field_name');
const popupProfileFieldAbout = popupProfileForm.querySelector('.popup__field_about');
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


const addFormValidator = new FormValidator(validationConfig, '.popup-add__form');
const profileFormValidator = new FormValidator(validationConfig, '.popup__form_profile');

addFormValidator.enableValidation();
profileFormValidator.enableValidation();

function handleOpenPopup(name, link) {
    zoomPopupTitle.textContent = name;
    zoomPopupImage.src = link;
    zoomPopupImage.alt = name;
    openPopup(zoomImage);
}

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
zoomCloseImage.addEventListener('click', () => closePopup(zoomImage))
popupImageCloseOverlay.addEventListener('mousedown', () => closePopup(zoomImage))


function openProfilePopup() {
    openPopup(profilePopup);

    popupProfileFieldName.value = profileName.textContent
    popupProfileFieldAbout.value = profileAbout.textContent
}


profileButton.addEventListener('click', openProfilePopup)


function handleProfileFormSubmit(evt) {
    evt.preventDefault()

    profileName.textContent = popupProfileFieldName.value
    profileAbout.textContent = popupProfileFieldAbout.value
}

popupProfileForm.addEventListener('submit', handleProfileFormSubmit)

function createCard(data) {
    const card = new Card(data, '#element', handleOpenPopup);
    return card.generateCard();
}

initialCards.forEach((data) => {
    elementList.append(createCard(data));
});


function handleElementFormSubmit(evt) {
    evt.preventDefault()

    const elementCard = {link: popupAddLink.value, name: popupAddTitle.value}
    const addElement = createCard(elementCard)

    elementList.prepend(addElement);

    closePopup(popupAdd)

    createCard(elementCard, elementList);

    popupAddForm.reset();
    addFormValidator.disableSubmitButton()
}


popupAddForm.addEventListener('submit', handleElementFormSubmit)