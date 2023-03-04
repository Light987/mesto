import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {

    constructor(selectorPopup) {
        super(selectorPopup);
        this._deleteButton = this._selectorPopup.querySelector('.popup-delete__button');
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