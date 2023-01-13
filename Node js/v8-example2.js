// Node.js v8.getHeapSpacestatistics() Example

// The v8.getHeapSpacestatistics() return statistics about heap space.It return an array of 5 objects 
// new space,old space.Each object contains information about space name,space size,space used
// heap size limit,total available size

const v8=require('v8');

console.log(v8.getHeapStatistics());