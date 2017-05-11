const express = require('express');
const rally = require('rally');
const queryUtils = rally.util.query;

const initiative = express.Router();

initiative.get('/', function(req,res){
  const restApi = rally({
    apiKey: req.user.accessToken
  });
  restApi.query({
    type: 'portfolioitem/initiative', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    limit: Infinity, //the maximum number of results to return- enables auto paging
    fetch: ['FormattedID', 'Name', 'Children'],
    query: queryUtils.where('DirectChildrenCount', '>', '0')
  }, function(err,result){
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).send(result.Results);
    }
  });
});

initiative.get('/:formattedId', function(req,res){
  const restApi = rally({
    apiKey: req.user.accessToken
  });
  restApi.query({
    type: 'portfolioitem/initiative', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    limit: Infinity, //the maximum number of results to return- enables auto paging
    fetch: ['FormattedID', 'Name', 'Children']
  }, function(err,result){
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).send(result.Results);
    }
  });
});

initiative.get('/:formattedID/children', function(req,res){
  const restApi = rally({
    apiKey: req.user.accessToken
  });
  restApi.query({
    type: 'portfolioitem/epic', //the type to query
    start: 1, //the 1-based start index, defaults to 1
    limit: 2, //the maximum number of results to return- enables auto paging
    fetch: ['FormattedID', 'Name'],
    query: queryUtils.where('Parent.FormattedID', '=', req.params.formattedID)
  }, function(err,result){
    if(err){
      res.status(500).send(err);
    } else {
      res.status(200).send(result.Results);
    }
  });
});

module.exports = initiative;