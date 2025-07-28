let array = [2, 7, 11, 15];

const TwoSum = (array, target) => {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(TwoSum(array, 9));

// 1. git clone
