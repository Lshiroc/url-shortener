const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		"hello": "Hiii"
	});
});

app.use("/.netlify/functions/api", router);


module.express.handler = serverless(app);