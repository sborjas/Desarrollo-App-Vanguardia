var express = require('express');
var app =  express();
var sam = require ('@sborjas/lab1');

//var request = require('request');
var fetch = require('node-fetch');


app.get('/', function (req, res){
    sam.getUsers().then(function(todos){
        res.send(todos)
    }) 
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});