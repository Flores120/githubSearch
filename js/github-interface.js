
$(document).ready(function(){
  $('#search').submit(function(event){
    event.preventDefault();
    var search = $('#searchInput').val();
    console.log(search);
  });
});
