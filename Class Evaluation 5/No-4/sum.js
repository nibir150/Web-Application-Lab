function sumEvenOdd(start, end, type) {
    // Input validation: Check for valid range and type.
    if (start > end) {
      return 0; // Return 0 for an invalid range.
    }
    if (type !== "even" && type !== "odd") {
      return 0; // Return 0 for an invalid type.
    }
  
    let sum = 0;
  
    // Iterate through the numbers in the range.
    for (let i = start; i <= end; i++) {
      // Check if the current number is even or odd based on the 'type' parameter.
      if (type === "even" && i % 2 === 0) {
        sum += i; // Add even number to the sum.
      } else if (type === "odd" && i % 2 !== 0) {
        sum += i; // Add odd number to the sum.
      }
      // No 'else' needed, as we only add if the condition is met.
    }
  
    return sum; // Return the calculated sum.
  }
  
  // Example Usage
  const startRange = 1;
  const endRange = 10;
  const evenSum = sumEvenOdd(startRange, endRange, "even");
  const oddSum = sumEvenOdd(startRange, endRange, "odd");
  
  console.log(`Sum of even numbers between ${startRange} and ${endRange}: ${evenSum}`); // Output: 30
  console.log(`Sum of odd numbers between ${startRange} and ${endRange}: ${oddSum}`);   // Output: 25
  
  // Example with an invalid range
  const invalidSum = sumEvenOdd(10, 1, "even");
  console.log(`Sum with invalid range: ${invalidSum}`); // Output: 0
  
  // Example with an invalid type
  const invalidTypeSum = sumEvenOdd(1, 10, "invalid");
  console.log(`Sum with invalid type: ${invalidTypeSum}`); // Output: 0
  