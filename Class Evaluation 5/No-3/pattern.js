function printPatternOne(rows) {
    /*
      Prints the following number pattern:
      1
      12
      123
      1234
      12345
    */
    for (let i = 1; i <= rows; i++) {
      let rowOutput = "";
      for (let j = 1; j <= i; j++) {
        rowOutput += j;
      }
      console.log(rowOutput);
    }
  }
  
  function printPatternTwo(rows) {
    /*
      Prints the following number pattern:
      1
      12
      123
      1234
      12345
    */
    for (let i = 1; i <= rows; i++) {
      let rowOutput = "";
      for (let j = 1; j <= i; j++) {
        rowOutput += j;
      }
      console.log(rowOutput);
    }
  }
  
  // Get the number of rows from the user (using a prompt, which works in a browser context)
  let numRows = parseInt(prompt("Enter the number of rows for the patterns:"), 10);
  
  if (isNaN(numRows) || numRows <= 0) {
    console.log("Invalid input. Please enter a positive integer for the number of rows.");
  } else {
    // Print the first pattern
    console.log("Pattern 1:");
    printPatternOne(numRows);
  
    // Print the second pattern (which is the same as the first)
    console.log("\nPattern 2:");
    printPatternTwo(numRows);
  }
  