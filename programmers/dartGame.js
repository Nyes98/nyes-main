let test1 = new Array(3).fill(1, 1, 2);
let test5 = new Array(10).fill().map((_, index) => Array(index + 1).fill());
let test2 = new Array(3, 3);
let test3 = new Array(3, 0, 5);

console.log(test1[3]);

// console.log(test1.length);
for (let i = 0; i < test5.length; i++) {
  console.log(test5[i].length);
}

// console.log(test2);
// console.log(test2.length);
