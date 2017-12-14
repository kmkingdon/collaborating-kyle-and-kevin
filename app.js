const personArray = [{
  name: "Kyle",
  age: 27
},{
  name: "Kevin",
  age: 13
},{
  name: "Paul",
  age: 24
}]


let numbers= [1, 2, 3, 4, 5];

function sum(array) {
  let sum= 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}
