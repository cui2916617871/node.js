var http = require("http");
http.createServer(function(req,res){
    
    res.writeHead(200,{'Content-Type':  'text/html;  charset=utf-8'})
    if(req.url !=="/favicon.ico") {//清楚第二次访问
        console.log("访问")
        res.write('hello world');
        res.end()
    }
    

}).listen(8000);
console.log("Server running at http://localhost:8000")