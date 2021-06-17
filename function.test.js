const {
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  verifyPassword,
  minimumConditionsReached,
} = require("./function.js");

test("check if password is less then 9", function () {
  const passwordLess = "henkie1";
  expect(hasRightLength(passwordLess)).toBe(true);
});

test("check if password is more then 9", function () {
  const passwordMore = "henkie1234";
  expect(hasRightLength(passwordMore)).toBe(false);
});

test("check if password is null", function () {
  const passwordNull = null;
  expect(isNotNull(passwordNull)).toBe(false);
});

test("check if password is not null", function () {
  const passwordNotNull = "b";
  expect(isNotNull(passwordNotNull)).toBe(true);
});

test("check if there is 1 or more uppercase", function () {
  expect(hasUpperCaseCharacter("A")).toBe(true);
});

test("check if there is 1 or more lowercase", function () {
  expect(hasLowerCaseCharacter("a")).toBe(true);
});

test("fail the lowercase", function () {
  expect(hasLowerCaseCharacter("AAAA")).toBe(false);
});

test("fail the uppercase", function () {
  expect(hasUpperCaseCharacter("aaaa")).toBe(false);
});

test("check if there is 1 digit", function () {
  expect(hasDigit(1)).toBe(true);
});

test("fail the digit check", function () {
  expect(hasDigit("asta")).toBe(false);
});

test("check if password works with uppercase and lowercase and number", function () {
  expect(verifyPassword("Asta01")).toBe(true);
});

test("combine lowercase with too long", function () {
  expect(verifyPassword("abcdefghij")).toBe(false);
});

test("combine Uppercase and Digit with right length", function () {
  expect(verifyPassword("ASTA01")).toBe(false);
});

test("null", function () {
  expect(verifyPassword(null)).toBe(false);
});
// na deze test kwam ik er achter dat ie dan bij de andere functies vast loopt op Cannot read property 'length' of null.

test("only lowercase", function () {
  expect(verifyPassword("abcdee")).toBe(true);
});

test("only number", function () {
  expect(verifyPassword("1")).toBe(false);
});

test("only digits", function () {
  expect(verifyPassword("123456")).toBe(false);
});

test("minimumConditionsReached, all conditions false", () => {
  const conditions = [false, false, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

test("minimumConditionsReached, 1 condition true", () => {
  const conditions = [true, false, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

test("minimumConditionsReached, 2 conditions true", () => {
  const conditions = [true, true, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

test("minimumConditionsReached, 3 conditions true", () => {
  const conditions = [true, true, true, false, false];
  expect(minimumConditionsReached(conditions)).toBe(true);
});
