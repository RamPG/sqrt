import Button from "./Classes/Button";
import Input from "./Classes/Input";
import Output from "./Classes/Output";

window.addEventListener("DOMContentLoaded", () => {
    const buttonElements = document.querySelectorAll('.btn');
    const deleteButton = document.querySelector('.delButton');
    const clearButton = document.querySelector('.clearButton');
    const resultButton = document.querySelector('.resultButton');
    const inputElement = document.querySelector('.inputLine');
    const outputElement = document.querySelector('.outputLine');
    const fixElement = document.querySelector('.precision');
    const buttons = [];
    const language = document.documentElement.lang;
    buttonElements.forEach((element) => {
        const symbol = element.id;
        const button = new Button({
            symbol,
        });
        buttons.push({button, element});
    });
    const input = new Input({
        inputValue: '',
        inputElement,
    });
    const output = new Output({
        outputElement,
        language,
        fixValue: 10,
    })
    buttons.forEach(({button, element}) => {
        element.addEventListener('click', () => {
            input.updateInput(button.getSymbol());
        });
    });
    fixElement.addEventListener('input', () => {
        const fixValue = fixElement.value;
        if (fixValue > 100) {
            fixElement.value = 100;
        }
        if (fixValue < 1) {
            fixElement.value = 1;
        }
        output.setFixValue(parseInt(fixElement.value));
    });
    deleteButton.addEventListener('click', () => {
        input.deleteInput();
    });
    clearButton.addEventListener('click', () => {
        input.clearInput();
    })
    resultButton.addEventListener('click', () => {
        output.showOutput(input.getInputValue());
    });
})
