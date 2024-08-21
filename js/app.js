// First Problem
const findRepeatedNumbers = (numbers) => {
  // Create an empty object to store counts of each number.
  const numberCounts = {};

  // Iterate through the numbers array.
  for (const number of numbers) {
    // If the number is already in the object, increment its count.
    if (numberCounts[number]) {
      numberCounts[number]++;
    } else {
      // If not, add it to the object with a count of 1.
      numberCounts[number] = 1;
    }
  }

  // Create a new array to store repeated numbers
  const repeatedNumbers = [];

  // Iterate through the numberCounts object
  for (const number in numberCounts) {
    // If the count is greater than 1, it's a repeated number
    if (numberCounts[number] > 1) {
      repeatedNumbers.push(+number);
    }
  }
  return repeatedNumbers;
};
console.log(findRepeatedNumbers([1, 2, 3, 4, 5, 3, 2, 6, 7, 5, 8, 1]));

// =====================================================================

// Second Problem
const findPrimesInRange = (start, end) => {
  // Helper function to check if a number is prime.
  const isPrime = (num) => {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime.
    if (num === 2) return true; // 2 is the only even prime number.
    if (num % 2 === 0) return false; // any even number but 2 is not prime.
    for (let i = 3; i * i <= num; i += 2) {
      // Check for factors up to the square root of num.
      if (num % i === 0) return false; // If num is divisible by i, it's not prime.
    }
    return true; // If no factors were found, num is prime.
  };

  // Create an array to store the prime numbers.
  const primeNumbers = [];

  // Loop through the range from start to end and use the isPrime function to check if the number is prime or not.
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      // Check if the current number is prime.
      primeNumbers.push(i); // Add the prime number to the array.
    }
  }
  return primeNumbers;
};
console.log(findPrimesInRange(1, 30));

// =====================================================================

// Third Problem
const sortStringByWordLength = (str) => {
  // Turning the string into an array of words splited by space.
  const result = str.split(" ");

  // Sorting the result with the sort method and sorting items based on their lengthes.
  // Then joining the array back to a string by space.
  return result.sort((a, b) => a.length - b.length).join(" ");
};
console.log(
  sortStringByWordLength(
    "The curious cat climbed to the top of the ancient oak tree to get a better view of the bustling city below"
  )
);

// =====================================================================

// Fourth Problem
// A function that takes an array and a callback function as parameters.
const filterArray = (arr, callback) => {
  const result = [];
  // Looping through the array and using the callback function to check if the numbers in the array is even or not.
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]); // Pushing number to the result array.
    }
  }
  return result;
};

// A callback function that checks if the number is even or not.
const evenNumber = (num) => {
  return num % 2 === 0; // Checking if the number is even or not
};

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], evenNumber));
