const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname +'/../client/dist/'));
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });


app.listen(PORT, function() {
  console.log(`App is listening on ${PORT}`);
});