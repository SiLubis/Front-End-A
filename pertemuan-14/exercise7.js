// // 1. Destructuring Array & Object
// // Array:
// const [a, b, c] = [1, 2, 3];
// console.log(a, b, c);

// // Object:
// const person = { name: 'John', age: 30 };
// const { name, age } = person;
// console.log(name, age);

// // 2. Destructuring with Partial Items (Array & Object)
// // Array:
// const [x, , z] = [1, 2, 3];
// console.log(x, z);

// // Object:
// const car = { brand: 'Toyota', model: 'Corolla', year: 2020 };
// const { model } = car;
// console.log(model);

// // 3. Destructuring with Default Values (Array & Object)
// // Array:
// const [p, q = 10] = [5];
// console.log(p, q);

// // Object:
// const laptop = { brand: 'HP' };
// const { brand, color = 'Black' } = laptop;
// console.log(brand, color);

// // 4. Destructuring with Rest Operator (Array & Object)
// // Array:
// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest);

// // Object:
// const user = { name: 'Alice', age: 25, city: 'New York' };
// const { name, ...details } = user;
// console.log(details);