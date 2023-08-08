// Immutability in Arrays

const numbers = [1, 2, 3];

// adding
// const index = numbers.indexOf(3);
// const updatedNumbers = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// removing
// const updatedNumbers = [...numbers.filter((n) => n !== 2)];

// updating
const updatedNumbers = [...numbers.map((n) => (n === 2 ? 20 : n))];

console.log(numbers, updatedNumbers);
