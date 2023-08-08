function sayHello() {
  console.log("Hello World!");
}
let fn = sayHello; //assigned to a var. passing reference.

function greet(fnMessage) {
  // passed as arg
  console.log(fnMessage());
}
greet(sayHello);

function retrunMessageFn() {
  // returning fn
  return function () {
    console.log("I am returning a fn");
  };
}
let messageFn = retrunMessageFn();
let message = messageFn();
