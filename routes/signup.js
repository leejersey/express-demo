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
	res.render('signup.ejs', {});
});

router.post('/',(req,res,next) => {
	var name = req.fields.name;
	var gender = req.fields.gender;
  	var bio = req.fields.bio;
  	var avatar = req.files.avatar.path.split(path.sep).pop();
  	var password = req.fields.password;
  	var repassword = req.fields.repassword;

  	db.query('INSERT INTO user(name, gender, bio, avatar, password, repassword) VALUES (?,?,?,?,?,?)',[name, gender, bio, avatar, password, repassword], function(err, data) {
	    if (err) throw err;
	    console.log(data);
	    res.send('OK');
	});
})

module.exports = router;