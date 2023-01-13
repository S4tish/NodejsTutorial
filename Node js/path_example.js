var path=require("path");

// Normalization

console.log('normalization: ' + path.normalize('/sssit/javatpoint//node/newfolder/tab/..'));

// join

console.log('jiont path: ' + path.join('/sssit','node/newfolder','tab','...'));

// Resolve

console.log('resolve:'+ path.resolve('path_example.js'));

// extension
console.log('ext name:' + path.extname('oath_example.js'));