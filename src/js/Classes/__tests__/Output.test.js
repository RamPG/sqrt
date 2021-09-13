import Output from "../Output";

const testOutput = new Output({
    fixValue: 10
})

it('check fixOutput', () => {
    expect(testOutput.fixOutput('12.34')).toEqual('12.34');
    expect(testOutput.fixOutput('12')).toEqual('12');
    expect(testOutput.fixOutput('12.3555555555555555554')).toEqual('12.3555555555');
});

it('check calculateOutput', () => {
    expect(testOutput.calculateOutput('15 + 3')).toEqual('±4.2426406871');
    expect(testOutput.calculateOutput('16')).toEqual('±4');
    expect(testOutput.calculateOutput('3 + 6i')).toEqual('±(2.2032026611 + 1.3616541287i)');
    expect(testOutput.calculateOutput('sqrt(')).toEqual('Incorrect input');
    expect(testOutput.calculateOutput('3 / 0')).toEqual('The value is undefined');
});
