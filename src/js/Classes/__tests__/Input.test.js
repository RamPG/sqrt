import Input from '../Input';

const testInput = new Input({
    inputValue: '123',
});

it('check inputValue', () => {
    expect(testInput.getInputValue()).toEqual('123');
});
it('check deleteInput', () => {
    testInput.deleteInput();
    expect(testInput.getInputValue()).toEqual('12');
});
it('check clearInput', () => {
    testInput.clearInput();
    expect(testInput.getInputValue()).toEqual('');
});
it('check updateInput', () => {
    testInput.updateInput('+');
    expect(testInput.getInputValue()).toEqual('+');
});
