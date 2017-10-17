var path = require('path');
var express =require('express');
var static  = require('express-static');
var cors = require('cors');//跨域
//var cookieParser = require('cookie-parser');
//var cookieSession = require('cookie-session');
var formidable = require('express-formidable');
var ejs = require('ejs');
var mysql=require('mysql');

var app = express();
// 处理表单及文件上传的中间件
app.use(formidable({
  uploadDir: path.join(__dirname, 'public/img'),// 上传文件目录
  keepExtensions: true// 保留后缀
}));

app.use(cors());

//app.use(cookieParser())
//server.use(cookieSession());
// (function (){
//   var keys=[];
//   for(var i=0;i<100000;i++){
//     keys[i]='a_'+Math.random();
//   }
//   server.use(cookieSession({
//     name: 'sess_id',
//     keys: keys,
//     maxAge: 20*60*1000  //20min
//   }));
// })();

//设置模板引擎
app.set('view engine', 'ejs');
//模板存放位置
app.set('views', './view');

var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signup');
var signinRouter = require('./routes/signin');
var articleRouter = require('./routes/article');
var mainRouter = require('./routes/main');
var postRouter = require('./routes/post');

app.use('/',indexRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.use('/article',articleRouter);
app.use('/main',mainRouter);
app.use('/post',postRouter);

app.use(static(__dirname + '/public'));

app.listen(3000);
console.log('app start');
