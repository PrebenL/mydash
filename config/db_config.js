require('dotenv').config({ path: './config/config.env'});
const db = require('mariadb');

//Process env variables
const vPort = process.env.PORT;
const vPool = db.createPool({
    host: process.env.DB_I, 
    user: process.env.DB_U, 
    password: process.env.DB_P, 
    database: process.env.DB_N,
    port: process.env.DB_PORT,
    rowsAsArray: true,
    connectionLimit: 5
});


module.exports = {vPool, vPort};