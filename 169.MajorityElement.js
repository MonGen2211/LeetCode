var majorityElement = function (nums) {
  let count = 0;
  let result = 0;
  newArray = nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i + 1] && i === 0) {
      count++;
    }

    if (newArray[i] === newArray[i + 1] && i > 0) {
      count++;
    }

    if (count >= Math.floor(newArray.length / 2)) {
      result = newArray[i];
      count = 0;
    }
  }

  return result;
};
