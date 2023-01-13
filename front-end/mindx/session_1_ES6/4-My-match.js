export const sum = (a ,b) => {
   return a + b;
}

export const sub = (a, b) => {
   return a - b;
}

export const version = "1.0"

const math = {
    cong: sum,
    tru: sub,
    version: version,
};

export default math;

