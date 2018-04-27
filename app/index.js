var http = require('http');
const port = 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('welcome to Andrew\'s server');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if(err) {
    return console.log('something something err', eer);
  }
  console.log(`listening on port ${port}`);
})
