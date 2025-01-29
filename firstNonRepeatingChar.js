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

//Optimized code
function firstNonRepeatingCharV2(str) {
  const charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character that appears only once
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}
