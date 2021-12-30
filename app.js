const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    path = require('path');

const proc = require('./config/db_config');

//-----------------------------------------------------------------------------------------------

//app config
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//ROUTING

app.get('/', require('./routes/index'));
app.get('/second', require('./routes/second'));

app.listen(proc.vPort, 
    console.log('Server running on port: ' + proc.vPort)
    );
