console.log("Hello");
var a = "Vedant"; //var is  the global scoped
console.log(a);

let b = 10; // let are the blocked scope
console.log(b + 10);
{
  let b = 20;
  console.log(b);
}
console.log(b);

const c = 30;
console.log(c);
// let d = (c = c + 1); Not Allowed  beacause of const ins'nt changed
let d = undefined;
let f = null;
console.log(typeof a, typeof b, typeof c, typeof d, typeof f);
//  The objects in the js
let student = {
  name: "Vedant",
  age: 18,
  "course title": "Information Technology",
};
//  if i wants to add or change some data in the object
console.log(student);
student.hobby = "Driving ";
console.log(student);
