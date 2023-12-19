const fs = require('fs');

const fileName = 'hello.txt';

// // - Synchronous
// fs.writeFileSync(fileName, 'Hello World');
// const data = fs.readFileSync(fileName, 'utf-8');
// console.log(data);

// - Asynchronous
// fs.writeFile(fileName, 'Hello World Using Asynchronous', () => {});
const data2 = fs.readFile(fileName, (err, data) => {
  // if(err) console.log('Error', error);

  console.log('Data ', data.toString('utf8'));
});
// console.log(data2);

// encoding, decoding --> converting from 1 format of data to another
// - ABC -->

// fs.readFile(fileName, function (err, data) {
//     console.log('Data ', data);
//   });
// // fs.appendFile()

// - Callback
// - Promise
// - Async/Await
