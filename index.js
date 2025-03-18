// welcome.js
import { verifyName } from './getName.js';
console.log("=".repeat(35));
console.log("Welcome to eligibility check");
console.log("=".repeat(35));
console.log("\n");
const userName = verifyName(username);
console.log(`Hello ${userName}!\n`);

// getName.js
export function verifyName() {
  const input = prompt("Enter your age: ");
  return input;
  }
  
  // welcome.js
import { validateAge } from "./validateAge.js";
const age = validateAge(age);

// validateAge.js
export function validateAge(age) {
  age = parseInt(prompt("Enter your age: "), age);
  if(age < 18){
  console.log('Not eligible for voting\n\n');
  } else {
  console.log('Eligible for voting\n\n');
  }
  }