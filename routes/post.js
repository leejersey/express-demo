var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var db = mysql.createPool({
		host:     '127.0.0.1',
	  	user:     'root',
	  	password: '123456',
	  	database: 'eblog'
	})

router.get('/',(req,res) => {
	res.render('post.ejs', {});
})

router.post('/',(req,res) => {
	console.log(req.fields);
	db.query('INSERT INTO article(title,content) VALUES (?,?)',[req.fields.title,req.fields.content], function(err, data) {
	    if (err) throw err;
	    console.log(data);
	    res.send('OK');
	});
})

router.post('/repost',(req,res) => {
	console.log(req.fields);

	
	db.query('INSERT INTO article(title,content) VALUES (?,?)',[req.fields.title,req.fields.content], function(err, data) {
	    if (err) throw err;
	    console.log(data);
	});
	res.json({
    	'code':1,
    	'msg':'ok'
	});
	
})

router.post('/geturl',(req,res) => {
	console.log(req.body);
	res.json({
    	'code':1,
    	'msg':'ok'
	});
	
})

module.exports=router;

