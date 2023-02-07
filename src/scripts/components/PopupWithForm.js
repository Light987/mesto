import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selectorPopup, submitHandler) {
        super(selectorPopup);
        this._form = this._selectorPopup.querySelector('.popup__form')
        this._submitHandler = submitHandler;
        this._inputs = this._form.querySelectorAll('.popup__field')
    }

    _getInputValues() {
        this.inputsList = {};

        this._inputs.forEach((item) => {
            this.inputsList[item.name] = item.value;
        });

        return this.inputsList;
    };

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues());
            this.close();
        });
    }

}