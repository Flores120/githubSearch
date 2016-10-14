function Search(){
  debugger;
   $.get('https://api.github.com/search/users'+ "?q=" + results).then(function(response){
   console.log(response.items[1].login);
 });
 }
 Search.prototype.getlist = function () {
   for (var i = 0; i < response.items.length; i++) {
     array[i]
   }
 };

exports.searchModule = Search;
