const products = [
  { name: "laptop", price: 3000, brand: "asus", color: "red" },
  { name: "mobile", price: 32000, brand: "iPhone", color: "blue" },
  { name: "camera", price: 9020, brand: "canon", color: "black" },
  { name: "light", price: 1099, brand: "prodip", color: "white" },
  { name: "watch", price: 200, brand: "casio", color: "yellow" },
];

// 1. map
const brands = products.map((product) => product.brand); // map can give return
// console.log(brands);

// 2. forEach
products.forEach((product) => console.log(product.name)); // forEach cannot give return

// 3. (filter)
const fancy = products.filter((product) => product.price >= 3000); //it can return the all match object
// console.log(fancy);

const specificName = products.filter((p) => p.name.includes("a"));
// console.log(specificName);

// 4. (find)
const findOne = products.find((p) => p.name.includes("i")); // it can return the first match object
console.log(findOne);
