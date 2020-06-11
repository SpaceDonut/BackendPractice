const request = require('request');

request('https://jsonplaceholder.typicode.com/todos/2', (err, res, body) => {
console.log("Inside request");
console.log('res',res.body)
  if(!err && res.statusCode == 200) {
    console.log(JSON.parse(body).title);
  }
});