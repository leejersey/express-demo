var express = require('express');

var indexRouter = require('./routes/index');
var articleRouter = require('./routes/article');
var mainRouter = require('./routes/main');
var postRouter = require('./routes/post');

var app = express();

app.use('/',indexRouter);
app.use('/article',articleRouter);
app.use('/main',mainRouter);
app.use('/post',postRouter);