var path = require('path');
var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var db = mysql.createPool({
	host:     '127.0.0.1',
  	user:     'root',
  	password: '123456',
  	database: 'eblog'
})

router.get('/', (req, res) => {
	res.render('signin.ejs', {});
});

router.post('/',(req,res,next) => {
	var name = req.fields.name;
  	var password = req.fields.password;

  	db.query('SELECT * FROM user WHERE name=? AND password=?',[name,password], function(err, data) {
	    if (err) throw err;
	    console.log(data);
	    res.redirect('/');
	});
})

module.exports = router;