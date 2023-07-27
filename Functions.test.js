
const {reverseString,stringLength,Calculator,capital}  =require('./Functions.js');
test ('reverse of world equal dlrow',()=>{
  expect(reverseString('world')).toBe('dlrow');
});

test ('reverse of empty should be error', ()=>{
  expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters.');
} )

test('length of world equal 5', ()=>{
  expect(stringLength('world')).toBe(5)
});


describe('calculator', () => {
  test('add 6+3 equal to 9', () => {
    const calculator = new Calculator(6, 3);
    expect(calculator.add()).toEqual(9);
  });

  test('subtract 6-3 equal to 3', () => {
    const calculator = new Calculator(6, 3);
    expect(calculator.subtract()).toEqual(3);
  });

  test('divide 6/3 equal to 2', () => {
    const calculator = new Calculator(6, 3);
    expect(calculator.divide()).toEqual(2);
  });

  test('multiply 6*3 equal to 18', () => {
    const calculator = new Calculator(6, 3);
    expect(calculator.multiply()).toEqual(18);
  });
});

test ('capital of world equal to World',()=>{
  expect(capital('world')).toBe('World');
});