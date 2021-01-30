const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//need to make reducer first to set up operation

const reducer = (accumulator, currentValue) => accumulator + currentValue;

//accumulator is the item in array, currentValue acts like a counter

let totalBatteries = batteryBatches.reduce(reducer, 0)

//arguments are the reducer operation and value to start from