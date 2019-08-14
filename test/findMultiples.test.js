const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected
it("test 1", function() {
  expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
});

it("test 2", function() {
  expect(findMultiples(3, 10)).toEqual([3, 6, 9]);
});

it("test 3", function() {
  expect(findMultiples(10, 15)).toEqual([10]);
});
