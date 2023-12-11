const ok = [34, 35, 45, 65, 423, 45, 232]

const then = ok.reduce(( a , b)=> b - a )

// console.log(then);


const numbers = [4, 2, 7, 1, 9, 5];

// Using the reduce function to find the maximum number in the array
const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);

console.log("The maximum number in the array is:", maxNumber) ;