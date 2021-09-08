import {evaluate, format} from 'mathjs';

export default class Input {
    constructor({
                    inputValue = '',
                    cursorValue = 0
                }) {
        this.inputValue = inputValue;
        this.cursorValue = cursorValue;
    }

    updateInput({
                    symbol = '',
                    cursorValue = this.cursorValue
                }) {
        this.inputValue = this.inputValue.slice(0, this.cursorValue) + symbol +
            this.inputValue.slice(this.cursorValue, this.inputValue.length);
        this.cursorValue = cursorValue;
    }

    leftInput() {
        this.cursorValue -= 1;
        console.log(this.inputValue, this.cursorValue);
    }

    rightInput() {
        this.cursorValue += 1;
        console.log(this.inputValue, this.cursorValue);
    }

    deleteInput() {
        this.cursorValue -= 1;
        this.inputValue = this.inputValue.slice(0, this.inputValue.length - 1);
        console.log(this.inputValue, this.cursorValue);
    }

    clearInput() {
        this.cursorValue = 0;
        this.inputValue = '';
        console.log(this.inputValue, this.cursorValue);
    }

    resultInput() {
        const result = format(evaluate('sqrt(' + this.inputValue + ')'), {
            notation: 'fixed',
            precision: '5'
        });
        console.log(result);
        return result;
    }

    getInputValue() {
        return this.inputValue;
    }

    getCursorValue() {
        return this.cursorValue;
    }
}
