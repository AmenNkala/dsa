function findSmallestPositiveInt(arr) {
  const set = new Set(arr);
  const max = Math.max(...arr);

  if (!set.has(1)) return 1;
  else {
    for (let i = 1; i <= max; i++) {
      if (!set.has(i)) {
        return i;
      }
    }
  }

  return max + 1;
}

//Optimized Approach (Cyclic Sort)
function findSmallestPositiveInt(arr) {
  let n = arr.length;

  // Step 1: Place each number in its correct index
  for (let i = 0; i < n; i++) {
    while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
      [arr[arr[i] - 1], arr[i]] = [arr[i], arr[arr[i] - 1]]; // Swap
    }
  }

  // Step 2: Find the first missing positive number
  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }

  // If all numbers from 1 to n are present, return n + 1
  return n + 1;
}
