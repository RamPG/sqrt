export default class Button {
    constructor({
                    symbol = '',
                }) {
        this.symbol = symbol;
    }

    getSymbol() {
        return this.symbol;
    }
    setSymbol(symbol) {
        this.symbol = symbol;
    }
}
