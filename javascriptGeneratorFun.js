/* WHAT IS A GENERATOR FUNCTION IN JAVASCRIPT?
ANS => JavaScript generators are just ways to make iterators. They use the yield keyword to yield execution control back to the calling function and can then resume execution once the next() function is called again. */

function* scriptFun() {
  const a = "Hello world!";
  const b = "I am Generator!";
  const c = "Welcome to the world of JavaScript!";
  yield a;
  yield b;
  yield c;
}
console.log(typeof scriptFun());

for (const element of scriptFun()) {
  console.log(element);
}
