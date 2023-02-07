class FormValidator {

    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    }

    _showInputError(inputElement, errorMessage) {
        // Находим элемент ошибки внутри самой функции
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        // Остальной код такой же
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);
    };

    _hideInputError(inputElement) {

        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
    };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {

            return !inputElement.validity.valid;
        })
    };


    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this.disableSubmitButton()
        } else {
            this.enableSubmitButton()
        }
    };

    _setEventListeners() {
        this._toggleButtonState(this._inputList, this._buttonElement, this._config);

        this._inputList.forEach((inputElement) => {

            inputElement.addEventListener('input', () => {

                this._isValid(inputElement)
                this._toggleButtonState();
            });
        });
    };

    enableValidation() {
        this._setEventListeners();
    };

    enableSubmitButton() {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.disabled = false;
    }

    disableSubmitButton() {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    }
}


export {FormValidator}