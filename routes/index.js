const express = require('express');
const router = express.Router();
const pool = require('../brain/db.js')

// Desc: Landing page
// Route: GET /
router.get('/', (req, res) => {
	res.render('dash',
	{ 
		layout: 'main',
		title: 'Home',
		stylesheet: 'dark'
	})
});
// Desc: Landing page
// Route: POST /
router.post('/', async (req, res) => {
	res.render('dash',
		{ 
			layout: 'main',
			title: 'Result',
			stylesheet: 'dark',
		});
})

module.exports = router;