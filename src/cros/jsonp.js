//server.js
const url = require('url');
	
require('http').createServer((req, res) => {
  // console.log('req: ', req);
    
    const data = {
	    "x": "10"
    };
    console.log('url.parse(req.url, true).query: ', url.parse(req.url, true).query);
    if(url.parse(req.url, true).query.word === 'sjh'){
      const callback = url.parse(req.url, true).query.callback;
      res.writeHead(200);
      res.end(`${callback}(${JSON.stringify(data)})`);
    }


}).listen(3000, '127.0.0.1');

console.log('启动服务，监听 127.0.0.1:3000');