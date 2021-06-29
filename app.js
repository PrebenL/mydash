const express = require('express'),
    app = express();

const check = require('./brain/checking.js');
const add = require('./brain/add.js');
const wipe = require('./brain/wipe.js');

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

app.listen(proc.vPort, 
    console.log('Server running on port: ' + proc.vPort)
    );
