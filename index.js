/*
    Testing on port 2700
*/

const http = require('http');
const fs = require('fs');

const port = 2700;
const server = http.createServer();





// Routing


const routing_handler = function (req, res){
    console.log(`Getting a request for ${req.url} from ${req.socket.remoteAddress}`);

    // console.log(req);

    if(req.url === '/'){
        const main = fs.createReadStream('html/main.html');
        res.writeHead(200, {'Content-Type':'text/html'});
        main.pipe(res);
    }
    else if(req.url.startsWith('/css/')){
        const css = fs.createReadStream('css/main.css');
        res.writeHead(200, {'Content-Type':'text/css'});
        css.pipe(res);
    }
    else{ // TODO: Change to a default Error404 html file
        const error404 = fs.createReadStream('html/404.html');
        res.writeHead(404, {'Content-Type':'text/html'});
        error404.pipe(res);
    }
}




const listening_handler = function(){
    console.log(`Now listening on PORT: ${port}`);
}
// Running the server
server.listen(port);
server.on('listening', listening_handler);

server.on('request', routing_handler);