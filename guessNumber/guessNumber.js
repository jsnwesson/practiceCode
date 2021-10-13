/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guess = function(num, pick) {
  if (num > pick) {
    return 1;
  } else if (num < pick) {
    return -1;
  } else {
    return 0;
  }
 }

 var guessNumber = function(n) {

  var pick = Math.floor(Math.random() * n + 1)
  var num = Math.ceil(n / 2);

  var result = guess(num, pick);

  while (result !== 0) {
    if (result === 1) {
      n = num;
      num = Math.ceil(n / 2);
      result = guess(num, pick);
    } else {
      num = Math.ceil((num + n) / 2);
      result = guess(num, pick);
    }
  }

  return num;
};

module.exports = guessNumber;