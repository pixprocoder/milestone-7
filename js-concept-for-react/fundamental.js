// 1. (Variable) How to write a variable using let and const
const myName = "Samsul kobir";
let age = 21;
age = 22;

// 2. (Condition)
// 6 basic conditions: <,>, ===, !==, <=,>=
// Multiple conditions: &&, ||
if (myName === "samsul kobir" || age === 21) {
  console.log("if");
} else if (myName === "samsul kobir" && age === 22) {
  console.log("elseIf");
} else {
  console.log("none of them");
}

// 3. Array declare
// index, length , push , pop etc.
const myArr = [212, 3, 5, 77, 3];
myArr[2] = 22;
console.log(myArr);

// 5. (Loop)
// for loop, while loop, do while loop
for (let i = 0; i < myArr.length; i++) {
  const number = myArr[i];
  console.log(number);
}

// 5. (Function)
function multiplication(x, y) {
  return x * y;
}
const result = multiplication(2, 5);
console.log(result);

// 6. (Object)
// 3 ways to access object property
const friends = {
  name: "rohan das",
  age: 33,
  hobbes: ["football", "cricket", "hokey"],
};

const hobbes = "hobbes";
console.log(friends.name); // direct access by property
console.log(friends["age"]); // access via property string
console.log(friends[hobbes]); // access via property name in a variable
