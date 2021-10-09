function maximumSub(nums){
  var maxSum = nums[0];
  var sum = nums[0];
  if (nums.length === 1) return maxSum;
  for (var i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum += nums[i])
    if (sum > maxSum) {
      maxSum = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

module.exports = maximumSub;