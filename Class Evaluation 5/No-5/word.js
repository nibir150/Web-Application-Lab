function countWords(str) {
    // Check if the input is a string.  Return 0 if it is not.
    if (typeof str !== 'string') {
      return 0;
    }
  
    // Remove leading and trailing spaces, tabs, and newlines.  Also replace multiple spaces, tabs, or newlines with a single space.
    const cleanStr = str.trim().replace(/\s+/g, ' ');
  
    // Check if the string is empty after cleaning.  If so, return 0.
    if (cleanStr === "") {
      return 0;
    }
  
    // Split the string into an array of words using spaces as delimiters.
    const words = cleanStr.split(' ');
  
    // Return the number of words in the array.
    return words.length;
  }
  
  // Example Usage
  const testString1 = "The quick brown fox";
  const testString2 = "  Hello  World  ";
  const testString3 = "This   is   a   test";
  const testString4 = "";
  const testString5 = "   ";
  const testString6 = "Hello\nWorld";
  const testString7 = "Hello\tWorld";
  const testString8 = "  Hello\tWorld\n  Again  ";
  const testString9 = 123; // Test with a non-string input
  
  console.log(`"${testString1}" has ${countWords(testString1)} words.`); // Output: 4
  console.log(`"${testString2}" has ${countWords(testString2)} words.`); // Output: 2
  console.log(`"${testString3}" has ${countWords(testString3)} words.`); // Output: 4
  console.log(`"${testString4}" has ${countWords(testString4)} words.`); // Output: 0
  console.log(`"${testString5}" has ${countWords(testString5)} words.`); // Output: 0
  console.log(`"${testString6}" has ${countWords(testString6)} words.`); // Output: 2
  console.log(`"${testString7}" has ${countWords(testString7)} words.`); // Output: 2
  console.log(`"${testString8}" has ${countWords(testString8)} words.`); // Output: 3
  console.log(`"${testString9}" has ${countWords(testString9)} words.`); // Output: 0
  