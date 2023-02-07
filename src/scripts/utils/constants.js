const initialCards = [{
    name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
    name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
    name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
    name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

const validationConfig = {
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__error_visible'
}

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

export {
    initialCards, validationConfig,
    profile,
    profileInfo,
    profileName,
    profileAbout,
    profileButton,
    profilePopup,
    popupProfileForm,
    popupProfileFieldName,
    popupProfileFieldAbout,
    popupCloseButton,
    popupCloseOverlay,
    popupAdd,
    popupAddForm,
    popupAddTitle,
    popupAddLink,
    popupAddCloseButton,
    popupAddCloseOverlay,
    profileAddButton,
    zoomImage,
    popupImageCloseOverlay,
    zoomCloseImage,
    zoomPopupImage,
    zoomPopupTitle,
    elementList
}