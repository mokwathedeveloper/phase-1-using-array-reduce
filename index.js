const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryBatches = [4, 5, 3, 6, 8, 2];

const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
  return accumulator + currentBatch;
}, 0);

console.log(totalBatteries); // Output: 28
