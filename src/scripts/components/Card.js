class Card {
    constructor(data, templateSelector, handleCardClick, userId, handleCardDelete, handleCardLike) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._userId = userId;
        this._cardId = data._id;
        this._cardOwnerId = data.owner._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }


    generateCard() {
        this._element = this._getTemplate();

        this._elementImage = this._element.querySelector('.element__image');
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementLike = this._element.querySelector('.element__like');
        this._elementDelete = this._element.querySelector('.element__delete');
        this._elementcounter = this._element.querySelector('.element__counter')

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;
        this._elementcounter.textContent = this._likes.length

        if (this._userId !== this._cardOwnerId) {
            this._elementDelete.remove();
        }

        if (this._likes.find((item) => {
            return this._userId === item._id;
        })) {
            this._elementLike.classList.add('element__like_active');
        }

        this._setEventListener();

        return this._element;
    }


    _removeCard() {
        this._element.remove();
        this._element = null;
    }


    _setEventListener() {
        this._elementLike.addEventListener('click', () => {
            this._handleCardLike(this._cardId, this._elementLike.classList.contains('element__like_active'))
                .then((res) => {
                    this._likes = res.likes;
                    this._elementcounter.textContent = this._likes.length;
                    this._elementLike.classList.toggle("element__like_active");
                })
                .catch((err) => {
                    console.log(err);
                });
        });
        this._elementDelete.addEventListener('click', () => {
            this._handleCardDelete(() => this._removeCard(), this._cardId);
        });

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick(this._link, this._name);
        })
    };

}


export {Card}