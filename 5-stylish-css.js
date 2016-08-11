var express = require("express")
var path = require("path")
var app = express();

app.use(require("stylus").middleware(process.argv[3]) || path.join(__dirname, "style"))
//look for stylesheets in this folder; compile into CSS and serve
app.use(express.static(process.argv[3]) || path.join(__dirname, "style"))
// app.get("/", function(req, res){
//   res.render("index")
// })
app.listen(process.argv[2] || 3000)
