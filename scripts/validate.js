const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__error_visible'
}


const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add(inputErrorClass);
    console.log(inputElement.classList)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {

    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {

        return !inputElement.validity.valid;
    })
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
    }
};


const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {

        inputElement.addEventListener('input', () => {

            isValid(formElement, inputElement, inputErrorClass, errorClass)
            toggleButtonState(inputList, buttonElement);
        });
    });
};


const enableValidation = ({
                              formSelector,
                              inputSelector,
                              submitButtonSelector,
                              inactiveButtonClass,
                              inputErrorClass,
                              errorClass
                          }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
    });
};


// Вызовем функцию
enableValidation(selectors);
