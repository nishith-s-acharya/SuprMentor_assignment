// ============================================
// CONSOLE CHALLENGE — CALCULATOR OPERATIONS
// ============================================
// Assignment  : Console Challenge
// Description : Write JS programs for calculator operations
//               inside the browser console.
// Date        : 24/02/2026
// ============================================

// ------------------------------------
// OPERATION 1 — ADDITION
// ------------------------------------
function add(a, b) {
  let result = a + b;
  console.log("Addition of " + a + " + " + b + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 2 — SUBTRACTION
// ------------------------------------
function subtract(a, b) {
  let result = a - b;
  console.log("Subtraction of " + a + " - " + b + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 3 — MULTIPLICATION
// ------------------------------------
function multiply(a, b) {
  let result = a * b;
  console.log("Multiplication of " + a + " * " + b + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 4 — DIVISION
// ------------------------------------
function divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero is not allowed!");
    return null;
  }
  let result = a / b;
  console.log("Division of " + a + " / " + b + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 5 — MODULUS
// ------------------------------------
function modulus(a, b) {
  if (b === 0) {
    console.log("Error: Modulus by zero is not allowed!");
    return null;
  }
  let result = a % b;
  console.log("Modulus of " + a + " % " + b + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 6 — POWER
// ------------------------------------
function power(a, b) {
  let result = Math.pow(a, b);
  console.log(a + " raised to power " + b + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 7 — SQUARE ROOT
// ------------------------------------
function squareRoot(a) {
  if (a < 0) {
    console.log("Error: Square root of negative number is not allowed!");
    return null;
  }
  let result = Math.sqrt(a);
  console.log("Square root of " + a + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 8 — ABSOLUTE VALUE
// ------------------------------------
function absolute(a) {
  let result = Math.abs(a);
  console.log("Absolute value of " + a + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 9 — FLOOR
// ------------------------------------
function floorValue(a) {
  let result = Math.floor(a);
  console.log("Floor value of " + a + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 10 — CEIL
// ------------------------------------
function ceilValue(a) {
  let result = Math.ceil(a);
  console.log("Ceil value of " + a + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 11 — ROUND
// ------------------------------------
function roundValue(a) {
  let result = Math.round(a);
  console.log("Round value of " + a + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 12 — MAXIMUM OF TWO NUMBERS
// ------------------------------------
function maximum(a, b) {
  let result = Math.max(a, b);
  console.log("Maximum of " + a + " and " + b + " = " + result);
  return result;
}

// ------------------------------------
// OPERATION 13 — MINIMUM OF TWO NUMBERS
// ------------------------------------
function minimum(a, b) {
  let result = Math.min(a, b);
  console.log("Minimum of " + a + " and " + b + " = " + result);
  return result;
}

// ============================================
// CALCULATOR USING SWITCH STATEMENT
// ============================================

function calculator(a, operator, b) {
  let result;

  console.log("==============================");
  console.log("Input : " + a + " " + operator + " " + b);

  switch (operator) {
    case "+":
      result = a + b;
      console.log("Operation : Addition");
      console.log("Result    : " + result);
      break;

    case "-":
      result = a - b;
      console.log("Operation : Subtraction");
      console.log("Result    : " + result);
      break;

    case "*":
      result = a * b;
      console.log("Operation : Multiplication");
      console.log("Result    : " + result);
      break;

    case "/":
      if (b === 0) {
        console.log("Error : Division by zero is not allowed!");
        return null;
      }
      result = a / b;
      console.log("Operation : Division");
      console.log("Result    : " + result);
      break;

    case "%":
      if (b === 0) {
        console.log("Error : Modulus by zero is not allowed!");
        return null;
      }
      result = a % b;
      console.log("Operation : Modulus");
      console.log("Result    : " + result);
      break;

    case "**":
      result = Math.pow(a, b);
      console.log("Operation : Power");
      console.log("Result    : " + result);
      break;

    default:
      console.log("Error : Invalid operator [ " + operator + " ]");
      console.log("Valid operators are : + - * / % **");
      return null;
  }

  console.log("==============================");
  return result;
}

// ============================================
// RUNNING ALL INDIVIDUAL OPERATIONS
// ============================================

console.log("");
console.log("============================================");
console.log("   INDIVIDUAL CALCULATOR OPERATIONS        ");
console.log("============================================");

add(10, 5);
subtract(10, 5);
multiply(10, 5);
divide(10, 5);
modulus(10, 3);
power(2, 8);
squareRoot(144);
absolute(-50);
floorValue(4.9);
ceilValue(4.1);
roundValue(4.5);
maximum(100, 200);
minimum(100, 200);

console.log("");
console.log("============================================");
console.log("   ERROR HANDLING TESTS                    ");
console.log("============================================");

divide(10, 0);
modulus(10, 0);
squareRoot(-25);

console.log("");
console.log("============================================");
console.log("   CALCULATOR USING SWITCH STATEMENT       ");
console.log("============================================");

calculator(20, "+", 10);
calculator(20, "-", 10);
calculator(20, "*", 10);
calculator(20, "/", 10);
calculator(20, "%", 3);
calculator(2, "**", 10);
calculator(20, "/", 0);
calculator(20, "@", 10);

console.log("");
console.log("============================================");
console.log("   ALL OPERATIONS COMPLETED                ");
console.log("============================================");
