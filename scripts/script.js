// определяем переменные
let profile = document.querySelector('.profile')
let profileInfo = profile.querySelector('.profile-info')
let profileName = profileInfo.querySelector('.profile-info__name')
let profileAbout = profileInfo.querySelector('.profile-info__about')
let editButton = profileInfo.querySelector('.profile-info__edit-button')
let popup = document.querySelector('.popup')
let popupForm = popup.querySelector('.popup__form')
let inputs = document.querySelectorAll('input');
let closeButton = popup.querySelector('.popup__close-button');


// функция открытия попап
function openPopup() {
    popup.classList.add('popup_opened')
    console.log(popup)

    inputs[0].value = profileName.textContent
    inputs[1].value = profileAbout.textContent
}

// вызов открытия попап
editButton.addEventListener('click', openPopup)


// функция закрытия попап
function closePopup() {
    popup.classList.remove('popup_opened')
}

closeButton.addEventListener('click', closePopup)


// функция сохранения
function formSubmit(evt) {
    evt.preventDefault()

    profileName.textContent = inputs[0].value
    profileAbout.textContent = inputs[1].value
}

// вызов функции сохранения
popupForm.addEventListener('submit', formSubmit)