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

function addEntry(vSection, vLabel, vUrl){
  console.log("Adding: " + vLabel);
	pool.getConnection()
 	.then(conn => {
    	conn.query(`SELECT * FROM Panels where section = '${vSection}';`)
    	.then((rows) => {
    		console.log(rows);
    		vQueryAdd = `insert into ${DB_NAME}.Panels(section, label, url) values('${vSection}', '${vLabel}', '${vUrl}');`
    		return conn.query(vQueryAdd);

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

module.exports = {addEntry};