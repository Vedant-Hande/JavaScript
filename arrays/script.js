let a = [10, 20, 30, 40, 50];
console.log(a);
console.log("Array Elements are  : ");
for (let i = 0; i < a.length; i++) {
  console.log("element " + i + " is : " + a[i]);
}

console.log("The length of an array is : " + a.length);
a[2] = 70; // changing an array element
console.log(a);
console.log(" converting array to_String : " + a.toString());
console.log(" joining an array byu using join(-) : " + a.join("-"));
console.log(" push() method in array : " + a.push(90));
console.log(a);
console.log(" pop() method in Array :" + a.pop());
console.log(a);
console.log(" shift() method in Array :" + a.shift());
console.log(a);
console.log(" unshift() method in Array :" + a.unshift(80));
console.log(a);
let a1 = [11, 22, 33, 44];
console.log("concat() method in array : " + a.concat(a, a1));

console.log("splice() in array : " + a.splice(1, 2, 66, 44));
console.log(a);
console.log("slice() in array : " + a.slice(2, 3)); //it only return 
console.log(a);
