const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");

// test cases
it("array with unsorted number", function() {
  expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
});

it("array with two lowest number", function() {
  expect(sumWithoutHighestAndLowest([1, 11, 1, 2, 3])).toEqual(5);
});

it("array with three highest number", function() {
  expect(sumWithoutHighestAndLowest([11, 11, 11, 2, 3])).toEqual(3);
});
