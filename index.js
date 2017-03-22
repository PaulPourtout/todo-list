const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homeController = require('./controllers/home');
const addController = require('./controllers/add');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/views/pages'));

// EJS defini comme view engine
app.set('view engine', 'ejs');


// Controllers
app.get("/", homeController);

app.get("/add", addController.get);

app.post("/add", addController.post);


app.listen(8080);
console.log("le serveur est en marche ! direction http://localhost:8080");
