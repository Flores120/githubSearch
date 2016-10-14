(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b39207005a23e54f016a20d706ad10f551e49024";

},{}],2:[function(require,module,exports){
// function Search(){
//  for (var i = 0; i < array.length; i++) {
//    array[i]
//  }
// }

// exports.searchModule = Search;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Search = require('./../js/github.js').searchModule;

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var results = $('#searchInput').val();
    $.get('https://api.github.com/search/users?/'+ results + '/access_token='  + apiKey).then(function(response){
    console.log(response);
  });
    $('.results').text("Here are your results " + results);
  });
});

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
