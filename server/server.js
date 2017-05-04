process.env.CLIENT_ID     = "df0a3ec5f65c4e5b852ec8585e2cd691";
process.env.CLIENT_SECRET = "RqsjRUk2TBCBM8UJexLke6I4VnPE0wyiU4xn3AgwUo";
process.env.SERVER_URL    = "http://localhost:8080";

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

// app.use(function(req,res,next){
//     res.setHeader('Access-Control-Allow-Origin', req.hostname);
//     next();
// });


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

app.listen(8080, function(err){
    if(err){
        console.log('BORKED');
        return;
    }
    console.log('Server Listening...');
});