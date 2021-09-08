export default class Button {
    constructor({
                    symbol = '',
                    incValue = 0,
                    decValue = 0
                }) {
        this.symbol = symbol;
        this.incValue = incValue;
        this.decValue = decValue;
    }

    getUpdatedCursorValue(cursorValue) {
        return cursorValue + this.incValue - this.decValue
    }

    getSymbol() {
        return this.symbol;
    }

    setIncValue(incValue) {
        this.incValue = incValue;
    }

    setDecValue(decValue) {
        this.decValue = decValue;
    }

    setSymbol(symbol) {
        this.symbol = symbol;
    }
}
