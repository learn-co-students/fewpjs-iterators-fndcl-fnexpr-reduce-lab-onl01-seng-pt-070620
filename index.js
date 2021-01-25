const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (accum, curr) => accum + curr
let totalBatteries = batteryBatches.reduce(reducer, 0)
