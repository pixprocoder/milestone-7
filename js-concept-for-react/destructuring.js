// 1. (Array destructuring)
const numbers = [22, 18];
// const x = numbers[0];
// const y = numbers[1];
const [x, y] = numbers;
// console.log(x, y);

const myFunc = (x, y) => {
  const result = [x, y];
  return result;
};

const [first, second] = myFunc(numbers[0], 3);
// console.log(first, second);

const friends = {
  name: "rohan das",
  age: 33,
  hobbes: ["football", "cricket", "hokey"],
};

const [firstHobby, secondHobby] = friends.hobbes;
// console.log(firstHobby, secondHobby);

// 2. (Object destructuring)
const products = {
  name: "mobile",
  price: 32000,
  brand: "iPhone",
  color: "blue",
  parts: {
    ram: "16gb",
    motherboard: "gigabite",
    mouse: "rapoo",
    keyboard: {
      company: "a4Teach",
      keyColor: "green",
    },
  },
};
const { company } = products?.parts?.keyboard;
console.log(company);
