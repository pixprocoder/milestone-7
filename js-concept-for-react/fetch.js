// 1. JSON => stringify, parse
const friends = {
  name: "rohan das",
  age: 33,
  hobbes: ["football", "cricket", "hokey"],
};

const friendsJSON = JSON.stringify(friends);
const friendsObj = JSON.parse(friendsJSON);
// console.log(friends);
// console.log(friendsJSON);
// console.log(friendsObj);

// 2. (fetch)
// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// keys and values
const keys = Object.keys(friends);
const values = Object.values(friends);

// for
const numbers = [22, 5, 74, 22];
numbers.forEach((f) => console.log(f));
const add2Number = numbers.map((n) => n + 2);
// console.log(add2Number);

// for of on array like object
// for in on an object

const products = [
  { name: "laptop", price: 3000, brand: "asus", color: "red" },
  { name: "mobile", price: 32000, brand: "iPhone", color: "blue" },
  { name: "camera", price: 9020, brand: "canon", color: "black" },
  { name: "light", price: 1099, brand: "prodip", color: "white" },
  { name: "watch", price: 200, brand: "casio", color: "yellow" },
];

const newProduct = { name: "bottle", price: 100, brand: "rfl" };
const newProducts = [...products, newProduct];
// console.log(newProduct);
// console.log(newProducts);
// console.log(products);

const remaining = products.filter((p) => p.name !== "camera");
console.log(remaining);
