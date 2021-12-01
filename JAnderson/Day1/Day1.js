// Day 1 JS Bootcamp
// by Justin Anderson
// Primitives Datatypes and Literal Values
5 //Number
  'ur mum' //String
true //Bool
// Storing values into a variable (still primative)
var urMumWeight = 4000;
console.log(urMumWeight);
// Collection Datatypes
// Arrays are ordered lists
var groceries = ['milk', 'bread', 'eggs'];
console.log(groceries[1]);
// Objects can act like unordered lists (dictionaries)
var cart = {
  wheels: 4,
  push: () => {
    console.log("going Forward");
  }
}
console.log(cart.wheels);
cart.push();
//Conditional Statements will run code in curly braces if expression provided in parenthesis resolves as 'true'
if (cart.wheels > 4) {
  console.log("You have too many wheels");
} else if (cart.wheels == 4) {
  console.log("Good wheel amount");
} else {
  console.log("Insufficient wheels");
}
//single line conditionals
if (cart.wheels) console.log("wheels yes");
else console.log("wheels no");
