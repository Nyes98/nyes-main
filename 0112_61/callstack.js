const a = 1;
function func1() {
  //   const a = 2;
  console.log(a);
}
func1();

function func2() {
  const a = 3;
  func1();
}
func2();
