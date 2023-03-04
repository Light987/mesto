import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selectorPopup, submitHandler) {
        super(selectorPopup);
        this._submitHandler = submitHandler;
        this._form = this._selectorPopup.querySelector('.popup__form')
        this._inputs = this._form.querySelectorAll('.popup__field')
        this._submitButton = this._selectorPopup.querySelector("button[type='submit']");
        this._submitButtonText = this._submitButton.textContent;
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

    setInput(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name];
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(evt, this._getInputValues());
            this.close();
        });
    }

    renderLoading(isLoading, loadingText = 'Сохранение...') {
        if (isLoading) {
            this._submitButton.textContent = loadingText;
        } else {
            this._submitButton.textContent = this._submitButtonText;
        }
    }

}