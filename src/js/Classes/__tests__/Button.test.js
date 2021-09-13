import Button from "../Button";

const testButton = new Button({
    symbol: '+'
});
it('Check get symbol', () => {
    expect(testButton.getSymbol()).toEqual('+');
});
it('Check set symbol', () => {
   testButton.setSymbol('1');
   expect(testButton.getSymbol()).toEqual('1');
});



