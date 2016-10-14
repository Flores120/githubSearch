(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b39207005a23e54f016a20d706ad10f551e49024";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Search(){

}
 Search.prototype.getlist = function(results) {
   var input = [];
   $.get('https://api.github.com/search/users'+ "?q=" + results).then(function(response){
   for (var i = 0; i < response.items.length; i++) {
    input.push(response.items[i].login);
    console.log(response.items[i]);
   }
      input.forEach(function(input){
      $('.results').append("<ul>" + input + "</ul>");
      // $("#img").attr("src", (input.avatar_url));
    });
  });
};

// Search.prototype.getRep = function(results) {
//   var input = [];
//   $.get('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc').then(function(response){
//     console.log(response);
//   });
// };
exports.searchModule = Search;

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Search = require('./../js/github.js').searchModule;

$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var results = $('#searchInput').val();
    var list = new Search();
    list.getlist(results);
     $('.results').text("Here are your results " + results);
  });
});




//  $('.results').text("Here are your results " + results);

//    input.forEach(function(input){
//    $('.results').append("<ul>" + input + "</ul>" );
//  });

// $.get('https://api.github.com/search/users'+ "?q=" + results).then(function(response){
//   var input = [];
//   for (var i = 0; i < response.items.length; i++) {
//    input.push(response.items[i].login);
//  }

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
