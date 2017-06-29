var express = require('express');

var app = express();

app.use(express.static('../client/public'));//default static route where server will go to client


app.listen(8000, function (err) {
  if(err){
    console.log("Server running fail" + err);
  }else {
    console.log("Server is running on port 8000");
  }
})