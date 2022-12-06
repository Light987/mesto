// определяем переменные
const profile = document.querySelector('.profile')
const profileInfo = profile.querySelector('.profile-info')
const profileName = profileInfo.querySelector('.profile-info__name')
const profileAbout = profileInfo.querySelector('.profile-info__about')
const profileButton = profileInfo.querySelector('.profile-info__edit-button')
const profilePopup = document.querySelector('.profile-popup')
const popupForm = profilePopup.querySelector('.popup__form')
const popupAdd = document.querySelector('.popup-add')
const popupAddForm = popupAdd.querySelector('.popup-add__form')
const popupFieldName = popupForm.querySelector('.popup__field_name');
const popupFieldAbout = popupForm.querySelector('.popup__field_about');
const popupAddTitle = popupAddForm.querySelector('.popup-add__title');
const popupAddLink = popupAddForm.querySelector('.popup-add__link');
const popupAddCloseButton = popupAdd.querySelector('.popup-add__close-button');
const popupCloseButton = profilePopup.querySelector('.popup__close-button');
const popupAddCloseOverlay = document.querySelector('.popup-add__overlay')
const popupCloseOverlay = document.querySelector('.popup__overlay')
const popupImageCloseOverlay = document.querySelector('.popup-image__overlay')
const profileAddButton = document.querySelector('.profile__add-button');
const elementList = document.querySelector('.elements__list');
const zoomImage = document.querySelector('.popup-image');
const zoomCloseImage = zoomImage.querySelector('.popup-image__close-button');
const zoomPopupImage = zoomImage.querySelector('.popup-image__image');
const zoomPopupTitle = zoomImage.querySelector('.popup-image__text');
const elementTemplate = document.querySelector('#element').content;


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
    document.removeEventListener('keydown', closePopupByEsc);
}


profileAddButton.addEventListener('click', () => openPopup(popupAdd))
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd))
popupAddCloseOverlay.addEventListener('mousedown', () => closePopup(popupAdd))
zoomCloseImage.addEventListener('click', () => closePopup(zoomImage))
popupCloseButton.addEventListener('click', () => closePopup(profilePopup))
popupCloseOverlay.addEventListener('mousedown', () => closePopup(profilePopup))
popupImageCloseOverlay.addEventListener('mousedown', () => closePopup(zoomImage))


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


function createCard(cardData) {
    const newItem = elementTemplate.cloneNode(true);
    const elementImg = newItem.querySelector('.element__image');
    const elementTitle = newItem.querySelector('.element__title');

    elementImg.src = cardData.link;
    elementImg.alt = cardData.name;
    elementTitle.textContent = cardData.name;


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
        zoomPopupImage.src = cardData.link;
        zoomPopupImage.alt = cardData.name;
        zoomPopupTitle.textContent = cardData.name;
    });
    return newItem;
}


initialCards.forEach((card) => {
    const newCard = createCard(card);
    elementList.append(newCard);
});


function handleElementFormSubmit(evt) {
    evt.preventDefault()

    const addElement = createCard({link: popupAddLink.value, name: popupAddTitle.value});
    elementList.prepend(addElement);
    closePopup(popupAdd);
}


popupAddForm.addEventListener('submit', handleElementFormSubmit)
