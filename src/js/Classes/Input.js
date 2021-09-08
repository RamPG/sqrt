import {create, all} from 'mathjs';

const mathjs = create(all, {
    number: 'BigNumber',
    precision: 256,
});

export default class Input {
    constructor({
                    inputValue = '',
                    cursorValue = 0,
                    fixValue = 20,
                }) {
        this.inputValue = inputValue;
        this.cursorValue = cursorValue;
        this.fixValue = fixValue;
    }
    leftInput() {
        this.cursorValue -= 1;
    }

    rightInput() {
        this.cursorValue += 1;
    }
    updateInput({
                    symbol = '',
                    cursorValue = this.cursorValue
                }) {
        this.inputValue = this.inputValue.slice(0, this.cursorValue) + symbol + this.inputValue.slice(this.cursorValue, this.inputValue.length);
        this.cursorValue = cursorValue;
    }

    deleteInput() {
        this.cursorValue -= 1;
        this.inputValue = this.inputValue.slice(0, this.inputValue.length - 1);
    }

    updateFixValue(number) {
        this.fixValue = number;
    }

    clearInput() {
        this.cursorValue = 0;
        this.inputValue = '';
    }

    fixInput(string) {
        const splitString = string.split('.');
        if (splitString.length === 2) {
            if (this.fixValue > splitString[1].length) {
                return splitString[0] + '.' + splitString[1];
            }
            return splitString[0] + '.' + splitString[1].slice(0, this.fixValue);
        }
        return string;
    }

    resultInput() {
        let result = mathjs.evaluate('sqrt(' + this.inputValue + ')');
        if (result.re && result.im) {
            const real = this.fixInput(result.re.toString());
            const imagine = this.fixInput(result.im.toString());
            result = mathjs.format(mathjs.evaluate('real + imagine * i', {
                real,
                imagine
            }), {
                notation: 'fixed'
            });
            const opResult = mathjs.format(mathjs.evaluate('-1(real + imagine * i)', {
                real,
                imagine
            }), {
                notation: 'fixed'
            });
            return [result, opResult];
        } else {
            result = mathjs.format(result, {notation: 'fixed'});
            if (result === '0') {
                return ['0'];
            } else {
                if (result == 'Infinity') {
                    return [undefined];
                }
                result = this.fixInput(result);
                return [result, '-' + result];
            }
        }
    }

    getInputValue() {
        return this.inputValue;
    }

    getCursorValue() {
        return this.cursorValue;
    }
}
