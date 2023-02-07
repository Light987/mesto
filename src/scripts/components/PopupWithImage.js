import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
        this._image = this._selectorPopup.querySelector('.popup-image__image');
        this._title = this._selectorPopup.querySelector('.popup-image__text');
    };

    open(src, title) {
        super.open();
        this._image.src = src;
        this._image.alt = title;
        this._title.textContent = title;
    }

}