var express = require("express");
// var cors = require('cors')
var app = express();
// app.use(cors())

//  var corsOptions = {
//  origin: 'http://localhost:3000',
//  credentials : true
// }
var port = process.env.PORT || 8080;
// app.use(cors(corsOptions));
app.post("/test", (req, res, next) => {
    // console.log(req.get('origin'))
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
app.get("/", (req, res, next) => {
 // res.json(["Tony","Lisa","Michael","Ginger","Food"]);
 // return "Hello World";
  res.send("Hello World2345")
});
app.listen(port, () => {
 console.log("Server running on port 3000");
});

