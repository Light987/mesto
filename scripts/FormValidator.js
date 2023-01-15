class FormValidator {

    constructor(config, settingsObj) {
        this._config = config;
        this._srttingsObj = settingsObj;
        this._formElement = document.querySelector(this._srttingsObj);
        this._inactiveButtonClass = this._config.inactiveButtonClass;
        this._submitButtonSelector = this._config.submitButtonSelector;
        this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    }

    _showInputError(inputElement, errorMessage) {
        // Находим элемент ошибки внутри самой функции
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        // Остальной код такой же
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorClass);
    };

    _hideInputError(inputElement) {

        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

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

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {

            return !inputElement.validity.valid;
        })
    };


    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._config.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        } else {
            this._buttonElement.classList.remove(this._config.inactiveButtonClass);
            this._buttonElement.removeAttribute("disabled");
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

}


export {FormValidator}