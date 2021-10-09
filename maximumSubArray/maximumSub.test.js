const maximumSub = require('./maximumSub.js');

xdescribe('maximum subarray', () => {
  it('should return a defined value', () => {
    expect(maximumSub([1,2])).toBeDefined();
  })
  it('should return a number', () => {
    expect(typeof maximumSub([1,2])).toBe('number');
  })
  it('should return element if length of input is 1', () => {
    expect(maximumSub([1])).toBe(1);
  })
  it('should find the contiguous subarray which has the largest sum and return the sum', () => {
    expect(maximumSub([0,1,2,3,4,5])).toBe(15);
    expect(maximumSub([2,1])).toBe(3);
    expect(maximumSub([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    expect(maximumSub([5,4,-1,7,8])).toBe(23);
    expect(maximumSub([-2,1])).toBe(1);
  })
})