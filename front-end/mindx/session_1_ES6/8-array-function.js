// map: biến đổi các phần tử trong mảng mà không thay đổi giá trị ban đầu

const mapArr = [1, 2, 3]
const mapArr2 = mapArr.map((item) =>{
    return item * 2;
})

console.log(mapArr ,mapArr2)

// filter: lọc các phần tử trong mảng mà không thay đổi giá trị ban đầu 

const fliterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fliterArr2 = fliterArr.filter((item) =>{
    return item % 2 !== 0;
})

console.log(fliterArr2 ,fliterArr)

// reduce: lặp qua các phần tử trong mảng mà không thay đổi giá trị ban đầu

const reduce = [1, 2, 3, 4]
const sum = reduce.reduce((acc, item) =>{
    return acc + item;
}, 0)

console.log(sum)

// some: lặp qua phần tử xem có thoải mãn đk không, có thì chả về true, ko thì tra flase

const someArr = [1, 3, ]
const someArr2 = someArr.some((item) =>{
    return item % 2 === 0;
})

console.log(someArr2)
