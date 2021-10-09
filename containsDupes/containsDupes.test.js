const containsDupes = require('./containsDupes.js');

xdescribe('contains duplicate', () => {
  it('should be defined', () => {
    expect(containsDupes([1,2])).toBeDefined();
  });
  it('should return a boolean', () => {
    expect(containsDupes([1,2])).toBe(false);
  })
  it('should return true if any value appears twice', () => {
    expect(containsDupes([1,2,2,4])).toBe(true);
  })
})