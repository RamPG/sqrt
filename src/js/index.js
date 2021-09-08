import Button from "./Classes/Button";
import Input from "./Classes/Input";

const getButton = function (buttonElement) {
    const className = buttonElement.classList[1];
    let id = buttonElement.id;
    const button = new Button({
        symbol: id,
    });
    if (className === 'symbolButton') {
        button.setIncValue(1);
    }
    if (className === 'actionButton') {
        button.setIncValue(3);
        button.setSymbol(' ' + id + ' ');
    }
    if (className === 'funcButton') {
        const funcLength = id.length - 1;
        button.setIncValue(funcLength);
        button.setSymbol(id);
    }
    return button;
}
window.addEventListener("DOMContentLoaded", () => {
    const buttonElements = document.querySelectorAll('.btn');
    const deleteButton = document.querySelector('.delButton');
    const clearButton = document.querySelector('.clearButton');
    const resultButton = document.querySelector('.resultButton');
    const inputElement = document.querySelector('.inputLine');
    const outputElement = document.querySelector('.outputLine');
    const leftButton = document.querySelector('.leftButton');
    const rightButton = document.querySelector('.rightButton');
    const fixElement = document.querySelector('.precision');
    const buttons = []
    buttonElements.forEach((element) => {
        buttons.push({
            element,
            button: getButton(element)
        });
    });
    const input = new Input({
        inputValue: '',
        cursorValue: 0,
        fixValue: 10,
    });
    buttons.forEach(({button, element}) => {
        element.addEventListener('click', () => {
            input.updateInput({
                symbol: button.getSymbol(),
                cursorValue: button.getUpdatedCursorValue(input.getCursorValue())
            });
            inputElement.innerHTML = input.getInputValue();
        });
    });
    fixElement.addEventListener('change', () => {
       input.updateFixValue(parseInt(fixElement.value));
    });
    deleteButton.addEventListener('click', () => {
        input.deleteInput();
        inputElement.innerHTML = input.getInputValue();
    });
    clearButton.addEventListener('click', () => {
        input.clearInput();
        inputElement.innerHTML = input.getInputValue();
    })
    resultButton.addEventListener('click', () => {
        outputElement.innerHTML = (input.resultInput().join(' '));
    });
    leftButton.addEventListener('click', () => {
        input.leftInput();
    });
    rightButton.addEventListener('click', () => {
        input.rightInput();
    });

})
