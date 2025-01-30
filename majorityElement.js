function majorityElement(array) {
  const numsSet = new Set(array);
  let majorEl;
  let streak = 0;
  for (let num of numsSet) {
    const count = array.filter((val) => val === num).length;
    if (count > streak) majorEl = num;
    streak = Math.max(streak, count);
  }
  return majorEl;
}

//Optimized Solution
function majorityElementV2(array) {
  const countMap = {};
  const majorityThreshold = Math.floor(array.length / 2);

  for (let num of array) {
    countMap[num] = (countMap[num] || 0) + 1;
    if (countMap[num] > majorityThreshold) return num;
  }
}
