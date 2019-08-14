// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {
  const sortedArray = array.sort(function(a, b) {
    return a - b;
  });
  const highest = sortedArray.pop();
  const lowest = sortedArray[0];
  const filteredArray = array.filter(
    value => value < highest && value > lowest
  );
  return filteredArray.reduce((acc, element) => {
    return acc + element;
  }, 0);
};

module.exports = sumWithoutHighestAndLowest;
