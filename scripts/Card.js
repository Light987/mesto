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


class Card {
    constructor(data, templateSelector, selector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._selector = selector;
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    _handleOpenPopup(popup) {
        popup.classList.add('popup_opened');
    }

    _handleClosePopup(popup) {
        popup.classList.remove('popup_opened');
    }


    _handleLikeClick() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active')
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListener();


        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

    _setEventListener() {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._selector.src.src = this._link;
            this._selector.src.alt = this._name;
            this._selector.title.textContent = this._name;

            this._handleOpenPopup(this._selector.elm);
        });

        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._element.querySelector('.element__delete').addEventListener('click', function (event) {
            event.target.closest('.element').remove();
        });

        this._selector.close.addEventListener('click', () => {
            this._handleClosePopup(this._selector.elm);
        })

        this._selector.closeOverlay.addEventListener('click', () => {
            this._handleClosePopup(this._selector.elm);
        })

        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                this._handleClosePopup(this._selector.elm);
            }
        });
    };
}


export {initialCards, Card}