
function sum(a, b) {
    console.log("adding 2 numbers", a + b)
    return a + b;
}
sum(3, 4)

const multi = function(a ,b) {
    console.log(multi)
    return a * b;
}

const sub = (a ,b) => {
    return  a - b;
}
console.log (sub(4, 1))

const device = (a, b) => a / b;    // trong điều kiện nếu giá trị trả lại là 1 kết quả thì k cần để trong ngoặc
    
    const addRess = () => ({diachi: "Hanoi" }  )  // nếu trả về 1 obj thì cần để trong ngoặc
console.log(addRess)