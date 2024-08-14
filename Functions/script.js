// 1
function myfun(name) {
  console.log("hello " + name);
}
myfun("vedant");

//2
function add(a, b, c = 5) {
  return a + b + c;
}

let Result = add(3, 4, 2);
let Result1 = add(3); // nan
console.log(Result);
console.log(Result1); // nan

// Arrow Funation 3

const fun = (x) => {
  console.log("hye this is an arrow function " + x);
};

fun(1);
fun(2);
fun(3);

// we can pass the number as a argument aslo

// Q arriw function --
const ob = (a, b, c) => {
  let student = {
    vedant: a,
    suraj: b,
    Prathameh: c,
  };
  console.log(student);
};

let final_Ans = ob(98, 89, 90);
console.log(final_Ans); // undefined --- we cannot return the value of the key value pair
