var songSearch = {
  clientId: "948e8e0197ac7c3448db90b3183718df",
  cloudbase: "https://api.soundcloud.com/tracks.json",
  url:'https://api.soundcloud.com/tracks.json?client_id=948e8e0197ac7c3448db90b3183718df&q=',

  init: function () {
    songSearch.getSearch();
  },

  getSearch: function () {
    $('#searchButton').click( function() {
    var song = $('#textbox').val();
      if(song != "") {
        songSearch.getSong(song);
      }
      else {
        alert("the song field cannot be empty");
      }
    });
  },

  getSong: function(search) {
    $.getJSON(songSearch.url+search, function(response) {
      //console.log(response);
      $('#eachOutput ul').empty();
      $(response).each(function(index) {
        //console.log(response[index].title);
        $('#output ul').append("<li>"+response[index].title+"</li>");
        var img = response[index].artwork_url;
        var title = response[index].title;
        var link = response[index].permalink_url;
        //console.log(img);
        // var a = $('img').attr('src',img);
        // var b = $('#title').html("Title: "+title);
        // var c= $('#info a').attr('href',link);
       // $('#eachOutput').html("<div id=image><img src="+img+"></div><div id=info><a href="+link+"><p id=title>"+title+"</p></a><p id=artiste>Artiste:</p>
       // </div>")
      $('#eachOutput ul').append("<li><img src="+img+"><p>"+title+"</p></li>")
      });
    });
  }
};

$(document).ready(songSearch.init);