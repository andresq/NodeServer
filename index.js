/*
    Testing on port 2700
*/

const http = require('http');
const Jimp = require('jimp');
const fs = require('fs');

const port = 2700;
const server = http.createServer();



Jimp.read('assets/o.png', (err, image) => {
    if (err) {
          throw err;
      }
      image
          .resize(128, 128)   // resize
          .greyscale()        // set greyscale
          .color([
              {apply: "darken", params: [10]},
              {apply: "red", params: [90]},
              {apply: "green", params: [193]},
              {apply: "blue", params: [103]}	//applies blue coloring to greyscale img
          ])
          .write('newO.png', () => console.log("File Saved!") );
  });

// // Routing


// const routing_handler = function (req, res){
//     console.log(`Getting a request for ${req.url} from ${req.socket.remoteAddress}`);

//     // console.log(req);

//     if(req.url === '/'){
//         const main = fs.createReadStream('html/main.html');
//         res.writeHead(200, {'Content-Type':'text/html'});
//         main.pipe(res);
//     }
//     else if(req.url.startsWith('/css/')){
//         const css = fs.createReadStream('css/main.css');
//         res.writeHead(200, {'Content-Type':'text/css'});
//         css.pipe(res);
//     }
//     else{
//         const error404 = fs.createReadStream('html/404.html');
//         res.writeHead(404, {'Content-Type':'text/html'});
//         error404.pipe(res);
//     }
// }




// const listening_handler = function(){
//     console.log(`Now listening on PORT: ${port}`);
// }
// // Running the server
// server.listen(port);
// server.on('listening', listening_handler);

// server.on('request', routing_handler);