const Logger = require('./rateLimiter.js');

describe('limits request at a certain rate', () => {
  xit('should return a boolean false if same message sent less than ten units before the previous timestamp', () => {
    var logger = new Logger();
    var firstLog = logger.shouldPrintMessage(1, "foo");
    var secondLog = logger.shouldPrintMessage(4, "foo");
    expect(typeof firstLog).toBe("boolean");
    expect(secondLog).toBe(false);
  })
  it('should return correct boolean depending on if timestamp is less than, equal to, or greater than previously sent message w/ timestamp', () => {
    var logger = new Logger();
    var firstLog = logger.shouldPrintMessage(1, "foo");
    var secondLog = logger.shouldPrintMessage(2, "bar");
    var thirdLog = logger.shouldPrintMessage(3, "foo");
    var fourthLog = logger.shouldPrintMessage(8, "bar");
    var fifthLog = logger.shouldPrintMessage(10, "foo");
    var sixthLog = logger.shouldPrintMessage(11, "foo");
    expect(firstLog).toBe(true);
    expect(secondLog).toBe(true);
    expect(thirdLog).toBe(false);
    expect(fourthLog).toBe(false);
    expect(fifthLog).toBe(false);
    expect(sixthLog).toBe(true);
  })
})