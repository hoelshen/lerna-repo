const url = require('url');

const http = require('http');

const server = http.createServer((req, res) => {
  const path = url.parse(req.url).path.slice(1);
  console.log('path: ', path);
  
  if (path === 'topics') {
    http.get('http://cnodejs.org/api/v1/topics', (resp) => {
      const { statusCode } = resp;
      const contentType = resp.headers['content-type'];
      console.log('resp: ', statusCode,contentType);
      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        resp.resume();
        return;
      }

      res.setEncoding('utf8');
      let data = "";
      resp.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      });
    })
  }
}).listen(3000, '127.0.0.1');

console.log('启动服务，监听 127.0.0.1:3000');