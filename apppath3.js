// use constant 
const logger = require('./logger');

console.log(logger);

logger.logs("new message output");

console.log(__filename);
console.log(__dirname);

const path = require('path');
var pathObj =  path.parse(__filename);
console.log(pathObj);