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

const result = majorityElement([2, 2, 1, 1, 1, 2, 2, , 1, 1, 1, 1]);
console.log(result);
