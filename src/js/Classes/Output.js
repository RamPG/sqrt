import {create, all} from 'mathjs';

const mathjs = create(all, {
    number: 'BigNumber',
    precision: 256,
});

export default class Output {
    constructor({
                    outputElement = {},
                    language = 'en',
                    fixValue = 10
                }) {
        this.outputElement = outputElement;
        this.language = language;
        this.fixValue = fixValue;
        this.outputMessages = {
            error: {
                ru: 'Некорректный ввод',
                en: 'Incorrect input',
                zh: '输入不正确',
                es: 'Entrada incorrecta'
            },
            inf: {
                ru: 'Значение неопределенно',
                en: 'The value is undefined',
                zh: '值未定义',
                es: 'El valor es incierto',
            }
        };

    }

    fixOutput(string) {
        const splitString = string.split('.');
        if (splitString.length === 2) {
            if (this.fixValue > splitString[1].length) {
                return splitString[0] + '.' + splitString[1];
            }
            return splitString[0] + '.' + splitString[1].slice(0, this.fixValue);
        }
        return string;
    }

    setFixValue(number) {
        this.fixValue = number;
    }

    calculateOutput(inputValue) {
        try {
            let result = mathjs.evaluate('sqrt(' + inputValue + ')');
            if (result.re && result.im) {
                const real = this.fixOutput(result.re.toString());
                const imagine = this.fixOutput(result.im.toString());
                return '±(' + mathjs.complex(parseFloat(real), parseFloat(imagine)) + ')';
            } else {
                result = mathjs.format(result, {notation: 'fixed'});
                if (result === '0') {
                    return '0'
                } else {
                    if (result === 'Infinity') {
                        return this.outputMessages.inf[this.language];
                    }
                    return '±' + this.fixOutput(result);
                }
            }
        } catch (e) {
            return this.outputMessages.error[this.language];
        }
    }

    showOutput(inputValue) {
        this.outputElement.innerHTML = this.calculateOutput(inputValue);
    }

}
