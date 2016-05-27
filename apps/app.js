$(function(){
  $('#searchVideo').click(function(){
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
 });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyA5ejRnvBXMcBDhuaUvvaBYJyj99oi_1Xo',
    q: searchTerm.toString(),
    r: 'json'    
  };
  url = 'https://www.googleapis.com/youtube/v3/search?';

  $.getJSON(url, params, function(data){
    for (var i = 0; data.items.length; i++) {
      $('#search-results').append('<a class="video" href="http://www.youtube.com/v/' + data.items[i].id.videoId + '?fs=1&amp;autoplay=1"> <img src=" ' + data.items[i].snippet.thumbnails.medium.url + '"</a><h5>'+data.items[i].snippet.title+'</h5>');
       $(".video").click(function() {
          $.fancybox({
            'padding'   : 0,
            'autoScale'   : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'title'     : this.title,
            'width'     : 640,
            'height'    : 385,
            'href'      : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'      : 'swf',
            'swf'     : {
            'wmode'       : 'transparent',
            'allowfullscreen' : 'true'
            }
          });
          return false;
        });
    }
  });
};