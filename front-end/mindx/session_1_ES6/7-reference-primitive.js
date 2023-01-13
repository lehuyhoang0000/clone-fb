// primivites data type: kiểu tham trị (dữ liệu nguyên thủy) sẽ được lưu vào trong 2 bộ nhớ riêng
// nên khi thay đổi sẽ không bằng nhau nữa
let x = 1;
let y = x;

console.log(x === y);

let z = 1;

console.log(z === x);

x = 2;
console.log(x === y)

// reference data: kiểu dữ liệu tham chiếu sẽ được lưu vào trong cùng 1 bộ nhớ
// khi thay đổi biến này thì biến kia sẽ cùng thay đổi

let foo = {}
let bar = foo;

console.log(foo === bar);// true

foo.name = 'foter';
console.log(foo.name);// true
console.log(foo === bar); // true


foo = {}
bar = {}
console.log(foo === bar); //flase
