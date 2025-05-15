const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8080;

const app = express();
const homeRoute = require("./routes/home");

app.use(cors());
app.use(bodyParser.json());

app.use(homeRoute);

app.listen(PORT, () => {
	console.log(`App listening at PORT ${PORT}`);
});
