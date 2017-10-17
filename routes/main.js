var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var db = mysql.createPool({
	host:     '127.0.0.1',
  	user:     'root',
  	password: '123456',
  	database: 'eblog'
})

router.get('/:id',function(req,res){
	var articleId=req.params.id;
	db.query('SELECT * FROM article WHERE id='+articleId,function(err, data) {
	    if (err) throw err;
	    console.log(data);
	    res.render('main.ejs', {list:data});
	});
})

module.exports = router;