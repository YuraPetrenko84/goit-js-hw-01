//      #1

//     function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

//         #2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below t his line
//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";

//     }

//     return "Access denied, wrong password!";


//     // Change code above this line

// }

//         #3
// function checkStorage(available, ordered) {
//   // Change code below this line
  

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
//     return "The order is accepted, our manager will contact you";
  

  
//   // Change code above this line
// }

//         #4
// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

//         #5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement=fruits[0];
//  const secondElement=fruits[1];
//  const lastElement=fruits[3];


//         #6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// // Write your code under this line
// console.log(fruits);
       
//         #7
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// // Change code below this line
// console.log(fruits.length);

//         #8
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


//         #9
//  function getExtremeElements(array) {
//   // Change code below this line
// return array.slice(0, 1).concat(array.slice(-1));

//   // Change code above this line
// }


//         #10
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
// words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));

//         #11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// return (message.split(" ").length) * pricePerWord;


//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


//         #12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
// string = array.join(delimiter);


//   // Change code above this line
//   return string;
// }

       
//         #13
// function slugify(title) {
//   // Change code below this line
// return title.toLowerCase().split(" ").join("-");


//   // Change code above this line
// }

//         #14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

       
//         #15
//  const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line


//         #16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const allClients = firstArray.concat(secondArray).slice(0, maxLength);
//   return allClients;


//     // Change code above this line
//   }

//         #17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


//         #18
// function calculateTotal(number) {
//  // Change code below this line
// for(var i=0, sum=0; i<= number; sum+=i++);
//   return sum;


//   // Change code above this line
// }
       
//         #19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//         #20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
// total += order[i];
// }
//   // Change code above this line
//   return total;
// }

       
//         #21
//  function findLongestWord(string) {
//   // Change code below this line
// const words = string.split(" ");
//   let longestWord = words[0];
// for (const word of words) {
//   if (word.length > longestWord.length){
//     longestWord = word;
//   }  
// }
//   return longestWord;
//   // Change code above this line
// }


//         #22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }


//         #23
// function filterArray(numbers, value) {
//    // Change code below this line
//   let newArray = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   let number = numbers[i];
//   if (number > value) {
// newArray.push(number);
//   }
  
// }
//   return newArray;
//   // Change code above this line
// }


//         #24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//    return fruits.includes(fruit);
// } 
//         #25
// function getCommonElements(array1, array2) {
//   // Change code below this line
// let newArray = [];
//   for (let i = 0; i < array1.length; i +=1) {
//     let commonElement = array1[i];
//     if (array2.includes(commonElement)) {
//       newArray.push(commonElement);
//     }
    
//   }
// return newArray;

//  // Change code above this line
// }

//         #26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let item of order) {
//  total += item;
// }
//   // Change code above this line
//   return total;
// }


       
//         #27
//   function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
   

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
      


//         #28
// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;
//         #29
// function getEvenNumbers(start, end) {
//    // Change code below this line
// let EvenNumbersArray = [];
//   for (i=start; i<=end; i+=1) {
//     if (i%2 === 0) {
//       EvenNumbersArray.push(i)
//     }
//   }

// return EvenNumbersArray;
//     // Change code above this line
//   }


//         #30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
       
//         #31
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//       // break;
//     }
//   }

//   return number;
//   // Change code above this line
// }


//         #32
// function includes(array, value) {
//   // Change code below this line
// let isIncludes = false;
//   for (const element of array) {
//     if (element === value) {
//       return isIncludes = true;
//     }
// }
//   return isIncludes;
// }
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

       
      

