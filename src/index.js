// Higher Order Fns: takes fn as input or returns it or both

function greet(fn) {
  console.log(fn());
}

function sayHello() {
  // returning fn
  return function () {
    return "I am returning a fn";
  };
}
