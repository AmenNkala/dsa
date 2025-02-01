function findSubArraySum(nums, k) {
  const container = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
      container.push(nums[i]);
      sum = nums[i];
      continue;
    }

    sum += nums[i];

    if (sum > k || sum === 0) {
      sum = nums[i];
    }

    if (sum === k) {
      container.push(sum);
      sum = nums[i];
    }
  }

  return container.length;
}

const result = abc([1, 1, 1, 1, 1], 2);
console.log(result);
