const express = require('express');
const rally = require('rally');

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

private.get('/query', function(req,res){
  const restApi = rally({
    apiKey: req.user.accessToken
  });
  restApi.query({
    type: 'portfolioitem/feature', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    pageSize: 20, //the page size (1-200, defaults to 200)
    limit: 20, //the maximum number of results to return- enables auto paging
    fetch: ['FormattedID', 'Name', 'ScheduleState', 'Children']
  }, function(err,result){
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).send(result.Results);
    }
  })
})

module.exports = private;