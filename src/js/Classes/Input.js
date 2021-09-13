export default class Input {
    constructor({
                    inputValue = '',
                    inputElement = {},
                }) {
        this.inputValue = inputValue;
        this.inputElement = inputElement;
    }

    deleteInput() {
        this.inputValue = this.inputValue.slice(0, this.inputValue.length - 1);
        this.inputElement.innerHTML = this.inputValue;
    }

    clearInput() {
        this.inputValue = '';
        this.inputElement.innerHTML = this.inputValue;
    }

    getInputValue() {
        return this.inputValue;
    }


    updateInput(symbol) {
        this.inputValue += symbol;
        this.inputElement.innerHTML = this.inputValue;
    }
}
