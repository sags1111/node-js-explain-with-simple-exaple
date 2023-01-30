const url = require("url");
const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    // req
    //index
    //about
    //pathName
    const path = http.request.url;
    if (path == "/about") {
        console.log("about page");
    } else if (path == "/") {
        console.log("home page deliverd");
    }
}).listen(9000);