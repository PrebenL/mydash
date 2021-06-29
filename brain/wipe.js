const db = require('mariadb');
const config = require('../prod-config.json');
const DB_ADDR = config.DB_ADDR;
const DB_PORT = config.DB_PORT;
const DB_NAME = config.DB_NAME;
const DB_USER = config.DB_USER;
const DB_PASS = config.DB_PASS;
const pool = db.createPool({
    host: DB_ADDR, 
    user:DB_USER, 
    password: DB_PASS, 
    database: DB_NAME,
    connectionLimit: 5
});

function wipeEntry(vSection, vLabel){
  console.log("Wiping: " + vLabel);
	pool.getConnection()
 	.then(conn => {
    	conn.query(`SELECT * FROM Panels where section = '${vSection}' and label='${vLabel}';`)
    	.then((rows) => {
    		console.log(rows);
    		vQueryWipe = `delete from ${DB_NAME}.Panels where label = '${vLabel}';`
    		return conn.query(vQueryWipe);

    })
    .then((res) => {
      //console.log(res);
      conn.end();
    })
    .catch(err => {
      console.log(err);
      conn.end();
    })
  })
  .catch(err => {console.log("Couldnt connect")
  });
};

module.exports = {wipeEntry};