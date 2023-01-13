const arr = [1,2,3];
console.log(arr);
console.log(...arr);

const arr2 = [0, ...arr,4];
console.log(arr2);

const arr3 = [...arr, ...arr2];
console.log(...arr3);

const obj = {name: "Hoàng"}

const objCloned = {
    ...obj,
    address: "HaNoi"
}
console.log(objCloned);

const x = 1;
const y = 2;
const z = 3;
// Match.max(x, y, z);

const sum = (...numbers) =>{
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum(x, y, z,4,5))