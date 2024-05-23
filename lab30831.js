// Part 1 Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// for (let i = 0; i < 101; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("fizzbuzz")
//   } else if (i % 5 == 0) {
//     console.log ("buzz")
//   } else if (i % 3 == 0) {
//     console.log("fizz")
//   } else {
//     console.log(i)
//   }
// }

//
// Part 2 Prime Time
//


// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     primeNum = false;
//   } 
// }

let num = 9

while (true) {
  let primeNum = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primeNum = false;
    } 
  }

  if (primeNum === true) {
    console.log(num);
    break;
  }
  num++;
}

