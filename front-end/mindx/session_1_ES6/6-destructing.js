const obj = {
    name: "Hoang",
    age: 23,
    address: {
        city: "Hanoi",
        street: "Nguyen Hong"
    },
    sex: "nam"
}

// const name = obj.name;
// const age = obj.age;
// const address = obj.address; 

const {name, age, address, sex} = obj

const number = [0, 1, 2]
const [x, y, z] = number

console.log(number)

console.log(sex)


let a=1;
let b=2;

// let temp = a;
// a = b;
// b =temp;

// let numbers = [0, 1]
// let [b, a] = numbers
[a, b] = [b, a]

console.log(b)