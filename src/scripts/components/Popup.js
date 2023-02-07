export default class Popup {
    constructor(selectorPopup) {
        this._selectorPopup = selectorPopup;
    }


    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };


    open() {
        this._selectorPopup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    };


    close() {
        this._selectorPopup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    };


    setEventListeners() {
        this._selectorPopup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button') || evt.target.classList.contains('popup__overlay')) {
                this.close();
            }
        });
    };
}