
//                           This is suppossed to be a server
//                           --------------------------------

const http = require("http");

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
res.statusCode =200;
function changeBackground(color) {
document.body.style.background = color;
}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http:/\/${hostname}:${port}/`);
});
