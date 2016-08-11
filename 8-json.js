var express = require("express")
var app = express();
var fs = require("fs");

app.get("/books", function(req, res){
  var file = process.argv[3]
  fs.readFile(file, function(e, data){
    console.log(data);
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
      res.json(books)
  })
})

app.listen(process.argv[2] || 3000)

//recieve a file from process.argv[3]
//read the file fs.readFile(filename, callback)
//parse is to JSON;  results = JSON.parse(string)
//respond with that content to the user
  //res.json(results)
