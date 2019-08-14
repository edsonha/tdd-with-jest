const fizzbuzz = require("../src/fizzbuzz");

test("1 should return number 1", function() {
  expect(fizzbuzz(1)).toEqual(1);
});

test("6 should return fizz", function() {
  expect(fizzbuzz(6)).toEqual("fizz");
});

test("10 should return buzz", function() {
  expect(fizzbuzz(10)).toEqual("buzz");
});

test("30 should return fizzbuzz", function() {
  expect(fizzbuzz(30)).toEqual("fizzbuzz");
});
