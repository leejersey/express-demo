var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var db = mysql.createPool({
	host:     '127.0.0.1',
  	user:     'root',
  	password: '123456',
  	database: 'eblog'
})

router.get('/', function(req, res) {
  	db.query('SELECT * FROM article', function(err, data) {
	    if (err) throw err;
	    console.log(data);
	    res.render('article.ejs', {list:data});
	});
});

router.get('/restarticle',function(req,res){
	db.query('SELECT * FROM article', function(err, data) {
	    if (err) throw err;
	    console.log(data);
	    var wrap={
	    	'code':1,
	    	'msg':'ok',
	    	'list':data
	    }
	    res.json(wrap);
	});
})

module.exports = router;