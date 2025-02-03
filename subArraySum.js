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

function findSubArraySum(nums, k) {
  const prefixSumMap = new Map();
  let count = 0;
  let sum = 0;

  prefixSumMap.set(0, 1);

  for (let num of nums) {
    sum += num;

    if (prefixSumMap.has(sum - k)) {
      count += prefixSumMap.get(sum - k);
    }

    prefixSumMap.set(sum, (prefixSumMap.get(sum) || 0) + 1);
  }

  return count;
}
