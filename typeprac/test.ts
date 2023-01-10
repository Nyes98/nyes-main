type Add = {
  //   (a: number): number;
  (a: string, b: number): string;
  (a: string, b: number, c: number): string;
};
// function test(a: number): string {
//   return "김성진";
// }

const add: Add = (a, b) => {
  console.log(a);
  console.log(b);
  return "hi";
};

// const add2: Add = (a) => {
//   return a + a;
// };

console.log(add(1, 2));
// console.log(test(1));
// console.log(add2(1));
// test(7);
