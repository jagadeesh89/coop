const configObj = require('./config/config.js');

const express       = require('express');
const morgan        = require('morgan');
const cookieParser  = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser    = require('body-parser');
const request       = require('request');

const coopAuth      = require('./auth/auth.js')();
const coopApi       = require('./api/api.js');

var app = express();

app.use(morgan('combined'));

app.use(express.static(__dirname + '/../client/build'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser());
app.use(cookieSession({ secret: 'meowsers'}));

app.use(coopAuth.initialize());
app.use(coopAuth.session());

app.use('/api', coopApi.public);

app.use('/api',function(req,res,next){
    if(req.user){
        return next();
    }
    res.status(401).send('UNAUTHORIZED!');
});

app.use('/api', coopApi.private);

app.use(function(req,res,next){
    res.status(404).send('meow');
});

app.listen(process.env.coop_port, function(err){
    if(err){
        console.log('BORKED');
        return;
    }
    console.log('Coop is Listening on port ' + process.env.coop_port);
});