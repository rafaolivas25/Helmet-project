const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const clas = require('./routes/class')
app.get('/testeclass',clas.testeclass)

const classs = require('./routes/class teste')
app.get('/class',classs.testecl)
app.get('/criar',classs.criar_jogo)
app.get('/criart',classs.criar_jogo_t)
app.get('/ver',classs.mostar)
app.get('/del',classs.remove)
app.get('/equipa',classs.add_equipa)
app.get('/bandeira',classs.add_bandeira)
module.exports = app;
