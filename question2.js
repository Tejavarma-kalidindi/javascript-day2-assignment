// string
let text = "The quick brown fox jumps over the wall";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text[7]);
console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));
console.log(text.charAt(26));
console.log(text.endsWith("jumps"));
console.log(text.split(" "));
// remaining methods
//substring
// 1.Doesn't perform on negative arguments
// 2.Does a swap if second argument greater than first
console.log(text.substring(-8));
console.log(text.substring(8));
console.log(text.substring(7, 3));
console.log(text.substring(3, 7));

// slice
// 1.Perform on negative arguments(prints from back of string)
// 2.Doesn't perform swap if second argument greater than first
console.log(text.slice(-8));
console.log(text.slice(8));
console.log(text.slice(7, 3));
console.log(text.slice(3, 7));
//replaceAll
console.log(text.replace("the", "stone"));

let arr = ["rio", 32, true, "london"];
let arr2 = ["denver", 33, false, "uk"];
console.log([arr, arr2]);
console.log(arr.length);
console.log(Array.isArray(arr));
console.log(arr.reverse());
console.log(arr.concat(arr2));
console.log(arr[2]);
arr.unshift("he");
console.log(arr);
arr.push("ok");
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log(arr2.slice(-2));
console.log(arr2.slice(2));
console.log(arr2.slice(1, 3));
console.log(arr2);
//splice remove elements of an array from position of first argument to no of count in second argument
// console.log(arr2.splice(2, 2));
// console.log(arr2);
console.log(arr2.includes(33));
let num = [1, 2, 3, 4, 6, 8, 9];
console.log(num.filter((num) => num > 3));
console.log(num.map((num) => num + 2));
console.log(num.reduce((total, num) => total + num, 0));
console.log(num.some((num) => num > 5));
console.log(num.every((num) => num > 5));
