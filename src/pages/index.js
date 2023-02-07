import './index.css';
import logo from '../images/logo.svg';
import avatar from '../images/avatar.png';

const whoIsTheGoat = [
    {name: 'logo', image: logo},
    {name: 'avatar', image: avatar},
];

import {
    initialCards,
    validationConfig,
    popupAddForm,
    popupProfileForm,
    zoomImage,
    elementList,
    profileName,
    profileAbout,
    popupAdd,
    profileAddButton,
    profileButton,
    popupProfileFieldName, popupProfileFieldAbout, profilePopup
} from '../scripts/utils/constants.js'
import {Card} from '../scripts/components/Card.js'
import {FormValidator} from '../scripts/components/FormValidator.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";

const addFormValidator = new FormValidator(validationConfig, popupAddForm);
const profileFormValidator = new FormValidator(validationConfig, popupProfileForm);

addFormValidator.enableValidation();
profileFormValidator.enableValidation();


const cardImage = new PopupWithImage(zoomImage);

cardImage.setEventListeners();


function createCard(data) {
    const card = new Card(data, '#element', () => {
        cardImage.open(data.link, data.name)
    });
    return card.generateCard();
}


const cards = new Section({
        items: initialCards,
        renderer: (item) => {
            const newCard = createCard(item);

            cards.addItem(newCard);
        }
    },
    elementList);

cards.renderItems();


const popupFormAdd = new PopupWithForm(popupAdd,
    (item) => {
        const newCard = createCard(item);
        cards.addItem(newCard);
        popupFormAdd.close();
    }
);

popupFormAdd.setEventListeners();


const userInfo = new UserInfo({
    profileName: profileName,
    profileInfo: profileAbout
});


const popupFormProfile = new PopupWithForm(profilePopup, (item) => {
    userInfo.setUserInfo(item.name, item.about);
});

popupFormProfile.setEventListeners();


profileAddButton.addEventListener('click', () => {
    popupFormAdd.open();
    addFormValidator.disableSubmitButton();
});

profileButton.addEventListener('click', () => {
    popupFormProfile.open();
    const profile = userInfo.getUserInfo();
    popupProfileFieldName.value = profile.name;
    popupProfileFieldAbout.value = profile.info;
});