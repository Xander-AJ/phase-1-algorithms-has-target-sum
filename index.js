// Function to check if any pair of numbers in an array adds up to a target number
function hasTargetSum(array, target) {
  // Create a set to store seen numbers
  const seenNumbers = new Set();

  // Iterate through the array:
  for (let num of array) {
    // Calculate the complement of each number with the target
    const complement = target - num;

    // If the complement is in the set, return true
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(num);
  }

  // If no pair found, return false
  return false;
}

/* 
  Big O time complexity: O(n)
*/

/* 
  Pseudocode:
  - Create a set to store seen numbers
  - Iterate through the array:
    - Calculate the complement of each number with the target
    - If the complement is in the set, return true
    - Add the current number to the set
  - If no pair found, return false
*/

/*
  Solution Explanation:
  - We use a set to store seen numbers as we iterate through the array.
  - For each number, we calculate its complement (target - num) and check if it's in the set.
  - If the complement is in the set, it means we've found a pair that adds up to the target, so we return true.
  - If we iterate through the entire array without finding a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;