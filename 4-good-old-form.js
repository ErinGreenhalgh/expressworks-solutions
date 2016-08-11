var express = require("express")
var bodyparser = require("body-parser")
var path = require("path")
var app = express();

app.use(bodyparser.urlencoded({extended: false}))

// app.use(express.static(process.argv[3] || path.join(__dirname, "public")))
//
// app.get("/form", function(req, res){
//   res.render("form")
// })

// app.post("/form", function(req, res){
//   res.end(req.body.str.split("").reverse().join(""))
// })
app.post("/form", function(req, res){
  res.send(req.body.str.split("").reverse().join(""))
})
app.listen(process.argv[2] || 3000)
