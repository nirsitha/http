var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring=require('querystring');

const port=process.env.PORT || 3000;
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    fs.readFile('./index.html',null,function(err,data){
        console.log("inside err check");
        if(err){
            res.writeHead(404);
            res.write("File not found");
        }
        else{
            res.write(data);
            res.end();  
        }
    })
    var path=url.parse(req.url).pathname;
    var query=url.parse(req.url).query;
    res.write("<div class='container'><h3>My Info:</h3>");
    res.write("<h5 class='pl-5'>Author:Nirsitha R</h5>");
    res.write("<h5 class='pl-5'>Roll no: 19ITR055</h5>");
    res.write("<h3>Server Information:</h3>");
    res.write("<h5 class='pl-5'>URL: "+req.url+"</h5>");
    res.write("<h5 class='pl-5'>Query: "+query+"</h5>");
    res.write("<h5 class='pl-5'>Pathname: "+path+"</h5></div>");
           
}).listen(port,()=>{
    console.log(port);
});