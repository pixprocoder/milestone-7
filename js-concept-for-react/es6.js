const numbers = [23, 1, 56, 778, 33, 214];
const friends = {
  name: "rohan das",
  age: 33,
  hobbes: ["football", "cricket", "hokey"],
};

// 1. (Template string)
const about = `hello my name is ${friends.name}. I have gotten in exam mark ${numbers[3]}. my favorite hobby is ${friends.hobbes[1]}`;
console.log(about);

// 2. (Arrow function)
const getFifty = () => 50;
const addSixty = (x) => x + 60;
const isEven = (x) => x % 2 == 0;
const doMath = (x, y) => {
  const sum = x + y;
  return sum;
};

// 3. Spread operator
const newNumbers = [...numbers];
const currentNumbers = [...numbers, 33, 44];
numbers.push(111);
numbers.push(111);

console.log(newNumbers);
console.log(currentNumbers);
console.log(numbers);
