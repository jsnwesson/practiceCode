const guessNumber = require('./guessNumber.js');

describe('a guessing number game', () => {
  it('should return a number', () => {
    expect(typeof guessNumber(10)).toBe('number');
  })
  it ('should return 1 if num is 1', () => {
    expect(guessNumber(1)).toBe(1);
  })
  it('should return the picked number from 1 to 2', () => {
    expect(guessNumber(2)).toBeDefined();
  })
  it('should return the picked number from 1 to 10', () => {
    expect(guessNumber(10)).toBeDefined();
  })
  it('should return the picked number from 1 to 230', () => {
    expect(guessNumber(230)).toBeDefined();
  })
})