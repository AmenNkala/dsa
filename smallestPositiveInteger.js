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
