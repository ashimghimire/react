var express = require('express');
var path = require('path');
require('dotenv').config();
var cors=require('cors');
var usersRouter = require('./routes/users');
var indexRouter =require('./routes/index');
var todoRouter =require('./routes/todo');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/todo', todoRouter);
app.use('/users', usersRouter);


module.exports = app;
