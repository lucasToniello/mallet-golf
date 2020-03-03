const port = 8000;
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); 
const app = express();

mongoose.connect("mongodb://localhost:27017/malletGolf", {
	useNewUrlParser: true,
	useUnifiedTopology: true	
});

requireDir("./models");

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());
app.use(expressLayouts);
app.use(express.static(__dirname + '/static'));
app.use("/", require('./routes'));

app.listen(port);
console.log("Servidor rodando na porta: " + port);