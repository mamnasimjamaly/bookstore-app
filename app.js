var express = require("express");
var app = express();
var BodyParser = require('body-parser');
var mongoose = require('mongoose');
Genre = require('./models/genre');
Book = require('./models/book');
//Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/' , function(req,res) {
	res.send("Please go to /api/books or /api/genres");
});

app.get('/api/genres' , function(req, res){
	Genre.getGenres(function(err, genres){
		if(err) {
			throw err;
		}
		res.json(genres);
 	});
});

app.get('/api/books' , function(req, res){
	Book.getBooks(function(err, books){
		if(err) {
			throw err;
		}
		res.json(books);
 	});
});

app.get('/api/books/:_id' , function(req, res){
	Book.getBookById(req.params._id, function(err, book){
		if(err) {
			throw err;
		}
		res.json(book);
 	});
});

app.listen(9000);
console.log("running on port 3000....");