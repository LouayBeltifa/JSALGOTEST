const {
  sumOfDigits,
  findMissing,
  isAnagram,
  sortByFrequency,
  moveZeroes,
  groupAnagrams,
} = require("./solutions.js");

function assertEqual(actual, expected, testName) {
  const result = actual === expected;
  console.log(
    `${testName}: ${
      result ? "✅ PASS" : `❌ FAIL (Expected ${expected}, got ${actual})`
    }`
  );
}

function assertArrayEqual(actual, expected, testName) {
  const result = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(
    `${testName}: ${
      result
        ? "✅ PASS"
        : `❌ FAIL (Expected ${JSON.stringify(expected)}, got ${JSON.stringify(
            actual
          )})`
    }`
  );
}

function assertAnagramGroups(actual, expected, testName) {
  if (!Array.isArray(actual)) {
    console.log(`${testName}: ❌ FAIL (Returned value is not an array)`);
    return;
  }

  const normalizeGroup = (group) => [...group].sort().join(",");
  const normActual = actual.map(normalizeGroup).sort();
  const normExpected = expected.map(normalizeGroup).sort();
  const result = JSON.stringify(normActual) === JSON.stringify(normExpected);

  console.log(
    `${testName}: ${
      result ? "✅ PASS" : `❌ FAIL (Got ${JSON.stringify(actual)})`
    }`
  );
}

// ---------- Test Cases ----------

// 1. sumOfDigits
console.log("▶️ sumOfDigits Tests");
assertEqual(sumOfDigits(1234), 10, "Test 1");
assertEqual(sumOfDigits(505), 10, "Test 2");
assertEqual(sumOfDigits(9), 9, "Test 3");

// 2. findMissing
console.log("\n▶️ findMissing Tests");
assertEqual(findMissing([1, 2, 4, 5]), 3, "Test 1");
assertEqual(findMissing([3, 7, 1, 2, 8, 4, 5]), 6, "Test 2");

// 3. isAnagram
console.log("\n▶️ isAnagram Tests");
assertEqual(isAnagram("Listen", "Silent"), true, "Test 1");
assertEqual(isAnagram("Hello", "Olelh"), true, "Test 2");
assertEqual(isAnagram("Hi", "Bye"), false, "Test 3");

// 4. sortByFrequency
console.log("\n▶️ sortByFrequency Tests");
assertArrayEqual(
  sortByFrequency([4, 6, 2, 2, 6, 4, 4]),
  [2, 2, 6, 6, 4, 4, 4],
  "Test 1"
);

// 5. moveZeroes
console.log("\n▶️ moveZeroes Tests");
assertArrayEqual(moveZeroes([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0], "Test 1");
assertArrayEqual(moveZeroes([1, 0, 2, 0, 3]), [1, 2, 3, 0, 0], "Test 2");

// 6. groupAnagrams
console.log("\n▶️ groupAnagrams Tests");
assertAnagramGroups(
  groupAnagrams(["bat", "tab", "tap", "pat", "cat"]),
  [["bat", "tab"], ["tap", "pat"], ["cat"]],
  "Test 1"
);
