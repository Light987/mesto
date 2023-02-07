class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
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
        this._setEventListener();


        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementTitle.textContent = this._name;

        return this._element;
    }

    _setEventListener() {

        this._elementImage.addEventListener("click", () => {
            this._handleCardClick(this._name, this._link);
        });

        this._elementLike.addEventListener("click", (evt) => {
            evt.target.classList.toggle("element__like_active");
        });

        this._elementDelete.addEventListener("click", () => {
            this._element.remove();
        });
    }
}


export {Card}