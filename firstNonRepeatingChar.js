function firstNonRepeatingChar(str) {
  const obj = str.split("").reduce((prev, curr) => {
    if (!prev.hasOwnProperty(curr)) {
      prev[curr] = 1;
    } else {
      prev[curr]++;
    }
    return prev;
  }, {});
  return (
    Object.entries(obj)
      .filter((entry) => entry[1] === 1)
      .flat()[0] || null
  );
}
