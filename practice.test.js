const practice = require('./practice.js');

xdescribe('a series of dumb tests', () => {
  //toBe uses Object.is to test exact equality
  it('should add 1 + 2 to equal 3', () => {
    expect(practice(1,2)).toBe(3);
  })

  //toEqual recursively checks every field of an object or array
  it('should compare object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2})
  })

  it('should add positive numbers that are not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  })
})
