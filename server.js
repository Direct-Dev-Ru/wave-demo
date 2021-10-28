const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use("/front",express.static(path.join(__dirname,"front","dist")));

app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));

app.listen(port, () => {
	console.log(__dirname);
	console.log(`Example app listening on port ${port}!`);
});
