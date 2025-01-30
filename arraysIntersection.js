const container1 = [1, 2, 2, 3, 4];
const container2 = [2, 3, 5, 3];

function intersection(arr1, arr2) {
  const firstSet = new Set(arr1);
  const secondSet = new Set(arr2);

  const intersection = [];
  for (let num of firstSet) {
    if (secondSet.has(num)) intersection.push(num);
  }

  return intersection;
}
