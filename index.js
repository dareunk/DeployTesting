const express = require("express");

const PORT = process.env.PORT || 80;

const app = express();
app.get("/", function(req,res) {
	res.send("hello world. Merged from feature branch");
});
app.listen(PORT);
console.log("Running on the port number:" + PORT);

