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

//Part 3
// let str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
// let row = str.split('\n');


let str = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let row = str.split('\n');

for (let i = 0; i < row.length; i++) {
  console.log(row[i]);
  let cell = row[i].split(',');
  console.log(cell[0], cell[1], cell[2], cell[3]);
}