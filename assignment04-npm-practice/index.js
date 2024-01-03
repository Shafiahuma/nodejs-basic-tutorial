
// Import NPM Package
const _ = require('underscore');

// Call appropriate function from the NPM package to solve the assignment
//_.contains() function from the underscore package.

// Array to check
const programmingLanguages = ["Java", "Javascript", "Typescript"];

/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "Java"
 */
// First Answer 
console.log(`Array contains "Java": ${_.contains(programmingLanguages, "Java")}`);

/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "C++"
 */
// Second Answer
console.log(`Array contains "C++": ${_.contains(programmingLanguages, "C++")}`);
