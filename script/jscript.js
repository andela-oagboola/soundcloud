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
      console.log(response);
      $(response).each(function(index) {
        console.log(response[index].title);
        $('#output ul').empty();
        $('#output ul').append("<li>"+response[index].title+"</li>")
      })
    });
  }
};

$(document).ready(songSearch.init);