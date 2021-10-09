//APPROACH 1: BRUTE FORCE
// const twoSum = function(nums, target) {

//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }

// }

//APPROACH 2: USING HASH TABLE
const twoSum = function(nums, target) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      var firstInd = hash[target - nums[i]];
      var secondInd = i;
      return [firstInd, secondInd];
    }
    hash[nums[i]] = i;
  }
}

module.exports = twoSum;