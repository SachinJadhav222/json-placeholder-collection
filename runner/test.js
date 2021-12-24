// process.argv.forEach(function (val, index, array) {
//     console.log(index + ': ' + val);
//   });
  
  const args = require('minimist')(process.argv.slice(2))
 console.log( args['name'] )//joe
  