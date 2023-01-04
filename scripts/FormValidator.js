const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__error_visible'
}

class FormValidator {
    constructor(obj, templateSelector) {
        this._obj = obj;
        this._templateSelector = templateSelector;
    }

    _showInputError(formElement, inputElement, errorMessage, obj) {
        // Находим элемент ошибки внутри самой функции
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        // Остальной код такой же
        inputElement.classList.add(obj.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(obj.errorClass);
    };

    _hideInputError(formElement, inputElement, obj) {

        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.remove(obj.inputErrorClass);
        errorElement.classList.remove(obj.errorClass);
        errorElement.textContent = '';
    };

    _isValid(formElement, inputElement, obj) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage, obj);
        } else {
            this._hideInputError(formElement, inputElement, obj);
        }
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {

            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState(inputList, buttonElement, obj) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(obj.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(obj.inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
    };

    _setEventListeners(formElement, obj) {

        const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
        const buttonElement = formElement.querySelector(obj.submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement, obj);

        inputList.forEach((inputElement) => {

            inputElement.addEventListener('input', () => {

                this._isValid(formElement, inputElement, obj)
                this._toggleButtonState(inputList, buttonElement, obj);
            });
        });
    };

    enableValidation() {
        const formElement = document.querySelector(this._templateSelector);
        this._setEventListeners(formElement, this._obj);
    };
}


export {selectors, FormValidator}