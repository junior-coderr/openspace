const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io');
const hbs = require('hbs');
const dotenv = require('dotenv').config();
const path = require('path');
const io = new Server(server);
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const Schema = require('./db/schema');
const Model = mongoose.model('person', Schema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'hbs');
hbs.registerPartials('/partials')
app.use('/data',express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/login', function (req, res) {
    res.render('login');
});


app.get('/signup', function (req, res) {

    res.render('signup');
});

let userdata;

app.post('/signup', function (req, res) {
    res.redirect('/signup/intrest');
    userdata = req.body;
});

app.get('/signup/intrest', function (req, res) {
    res.render('intrest_selection');
});

app.get('/dashboard/create',(req,res)=>{
    res.render('creating_project');
});

app.get('/dashboard',(req,res)=>{
    res.render('dashboard');
});




app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});


