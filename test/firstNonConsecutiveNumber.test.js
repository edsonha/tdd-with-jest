const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected
it("test 1", function() {
  expect(firstNonConsecutiveNumber([1, 3])).toEqual(3);
});

it("test 2", function() {
  expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toEqual(4);
});

it("test 3", function() {
  expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toEqual(-10);
});

it("test 4", function() {
  expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toEqual(null);
});
