import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {

    constructor(popupElement) {
        super(popupElement);
        this._deleteButton = this._popupElement.querySelector('.popup-delete__button');
    }

    setEventListeners = () => {
        super.setEventListeners();
        this._deleteButton.addEventListener('click', () => {
            this._confirm();
        })
    }

    open(action) {
        super.open()
        this._confirm = action;
    }

}