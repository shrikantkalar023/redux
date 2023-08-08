// Immutability
// Both methods do shallow copy, so be aware of any nested objs or arrays.

const person = {
  name: "John",
  address: {
    country: "India",
    city: "Mumbai",
  },
};

// 1st way
const updatedPerson = Object.assign({}, person, { name: "Ron", age: 12 });

// 2nd way
const updatedPerson2 = {
  ...person,
  name: "Won",
  address: { ...person.address, city: "Nagpur" },
};

console.log(updatedPerson, updatedPerson2);
