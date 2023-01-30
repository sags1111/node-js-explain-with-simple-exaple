const fs = require('fs');
// read file on anyc or snyc
fs.readFile('filename', (err, data) => {
    if (err) {
        console.log("error");
        console.log(err);
    } else {
        console.log(data);
    }
});

// write file
// append file
// deleted filereq.url);
//     res.end("gotcha!");
// }

// const server = http.createServer(requestUrl);
// server.listen(port, function(error) {
//     if (error) {
//         console.log(error);
//         return;
//     } else {
//         console.log("server got up port", port);
//     }
// });
// var http = require('http');
// http.createServer(function(req, res) {
//     // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);
// const fs = require('fs');
// var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, { 'constainer-type': 'text/html' });
//     res.write("<h1>i am uing node js</h1>");
//     res.end();
// }).listen(9000);
// // node js allow server side froom outside on browser
const http = require('http');
const cp = require("./mode");
const server = http.createServer((req, res) => {
    //req:process
    res.writeHead(200, { "contect-type": "text/html" });
    res.write("<h1>first server</h1>")
    res.write("<h2>second server</h2>")
    res.write("<button>click server</button>")
    res.end("done here apply!");
    ///res:achive and writing response
}).listen(8000);