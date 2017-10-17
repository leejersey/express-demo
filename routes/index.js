var fs = require('fs');
var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var db = mysql.createPool({
	host:     '127.0.0.1',
  	user:     'root',
  	password: '123456',
  	database: 'eblog'
});

router.get('/queryJob', function(req, res) {
	//fs.writeFileSync(path.join(__dirname, '/test/test.json'),JSON.stringify({a:1,b:2}));
	var JsonObj=JSON.parse(fs.readFileSync(process.cwd()+'/test/test.json'));
	console.log(process.cwd());
	console.log(JsonObj);
  	res.send(JsonObj);
});

module.exports = router;