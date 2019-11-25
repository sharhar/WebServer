const http = require('http');

const server = http.createServer(function(req, res) {
	res.write("Hello, world!");
	res.end();
});

server.listen(8080, function() {
	console.log('Server running at http://127.0.0.1:8080');
});