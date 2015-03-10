var songSearch = {
  clientId: "948e8e0197ac7c3448db90b3183718df",
  cloudbase: "https://api.soundcloud.com/tracks.json",
  url:'https://api.soundcloud.com/tracks.json?client_id=948e8e0197ac7c3448db90b3183718df&q=',

  init: function () {
    songSearch.getSearch();
  },

  getSearch: function () {
    $('#searchButton').click( function() {
      $('#details').empty();
      $('#errorWrapper').hide();
      $('#noResultWrapper').hide();
      $('#preloader').show();
    var song = $('#textbox').val();
      if(song !== "") {
        songSearch.getSong(song);
      }
      else {
        $('#preloader').hide();
        $('#errorWrapper').show();
      }
    });
  },

  getSong: function(search) {
    $.getJSON(songSearch.url + search, function(response) {
      $('#preloader').hide();
      console.log(response);
      if(response.length === 0) {
        $('#preloader').hide();
        $('#errorWrapper').hide();
        $('#noResultWrapper').show();
      }
      $(response).each(function(index) {
        
       var img = response[index].artwork_url;
       if(response[index].artwork_url === null) {
        img = "images/musical_notes_gray_small.png";
       }
       else {
        img = response[index].artwork_url;
       }
       var title = response[index].title;
       var link = response[index].permalink_url;
       var genre = response[index].genre;
       var stream = response[index].stream_url + "?client_id=" + songSearch.clientId;
       console.log(stream);
       var whole = "<div id=main><div class= \"col s3\" id=imageHolder><div><img src=" + img + "><br><div class=info>Title: "+title+"<br>Genre: "+genre+"</div><br><audio controls><source src= " + stream + " type=audio/mpeg> Your browser does not support the audio element.</audio></div></div>";
       $('#details').append(whole);
      });
    });
  }
};

$(document).ready(songSearch.init);