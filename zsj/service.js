var express = require('express')//是express的实例
var app = express();
app.use(express.static("zsj"));
app.get("/",function(req,res){
	//res.send("hello app!");
	res.send("html")
	// res.sendfile("./html/index.html");
	// res.sendfile("./css/index.css");
})
// app.get("/html",function(req,res){
// 	res.send("./html/index.html")
// })
app.listen(3100,function(){
	console.log("123");
});
