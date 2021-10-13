const twoSum = require('./twoSum.js');

xdescribe('Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target', () => {
  it('should return an array', () => {
    expect(Array.isArray(twoSum([1,2], 3))).toBe(true);
  })
  it('should return [0,1] if length of array is two', () => {
    expect(twoSum([1,2], 3)).toEqual([0,1]);
  })
  it('should return indices of values that equal to target', () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
    expect(twoSum([3,2,3], 6)).toEqual([0,2]);
  })
})