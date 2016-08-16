var express = require("express");
var app = express();
var BodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/' , function(req,res) {
	res.send("Please go to /api/books or /api/genres");
});

app.get('/api/genres' , function(req, res){
	res.send("In genres");
});

app.listen(9000);
console.log("running on port 3000....");