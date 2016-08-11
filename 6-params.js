var express = require("express")
var app = express();
var crypto = require('crypto')

function codify(id){
  return crypto.createHash("sha1")
               .update(new Date().toDateString() + id )
               .digest("hex")
}

app.put('/message/:id', function(req, res){
  res.send(codify(req.params.id))
})

app.listen(process.argv[2] || 3000)

//take in a PUT request with params
