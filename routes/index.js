const express = require('express');
const router = express.Router();
const pool = require('../brain/db.js')

// Desc: Landing page
// Route: GET /
router.get('/', async (req, res) => {

	let conn;
	try {
        conn = await pool.getConnection()
        var query = `select * from ${process.env.DB_N}.Panels;`;
        var rows = await conn.query(query);
  		let devResult = [];
      	let torrentResult = [];
      	let mediaResult = [];
      	for (var e = 0; e < rows.length; e++){
	        switch(rows[e][1]){

	          case 'Dev':
	            devResult.push(rows[e]);
	            break;

	          case 'Torrents':
	            torrentResult.push(rows[e]);
	            break;

	          case 'Media':
	            mediaResult.push(rows[e]);
	            break;
	        }
	    };

        res.render('dash', 
        	{layout: 'main',
        		title: 'Panel-Dash',
        		stylesheet: 'dark', 
        		data: 
        			{userQuery: req.params.userQuery,
          				LeftHeader: "DEV", LeftResults: devResult,
          				CenterHeader: "TORRENTS", CenterResults: torrentResult,
          				RightHeader: "MEDIA", RightResults: mediaResult,
        }});

    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

module.exports = router;