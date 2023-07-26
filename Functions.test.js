const { error } = require('console');
const {reverseString,stringLength}  =require('./Functions.js');
test ('reverse of world equal dlrow',()=>{
  expect(reverseString('world')).toBe('dlrow');
});

test ('reverse of empty should be error', ()=>{
  expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters.');
} )

test('length of world equal 5', ()=>{
  expect(stringLength('world')).toBe(5)
});