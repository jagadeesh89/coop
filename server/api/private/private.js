const express = require('express');
const initiative = require('./initiative.js');

var private = express.Router();

private.get('/test', function(req,res){
  res.status(200).send('true');
});

private.get('/user', function(req,res){
  res.status(200).send({
    FirstName: req.user.FirstName,
    LastName: req.user.LastName,
    user: req.user
  });
});

private.use('/initiative', initiative);

module.exports = private;