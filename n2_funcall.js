var http = require("http");
var otherfun = require("./module/otherfuns.js")
http.createServer(function(req,res){
    
    res.writeHead(200,{'Content-Type':  'text/html;  charset=utf-8'})
    if(req.url !=="/favicon.ico") {//清楚第二次访问
        var funname  = "fun3";
        //fun1(res)   
        otherfun[funname](res);
        // otherfun["fun3"](res);       
        res.end()
    }
    

}).listen(8000);
console.log("Server running at http://localhost:8000")

function fun1(res){
    console.log("fun1")
    res.write("hello ,我是fun1")
}