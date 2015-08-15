$(document).ready(function(){

  //create list item for displaying song information
  function displaySongList(songsList){
    for (var i = 0; i < songsList.songs.length; i++) {
      var current_song = songsList.songs[i];
      var song_display = "<li class='song-entry'>"
      song_display += "<div class='song-info'>";
      song_display += "<h1>" + current_song.title + "</h1>";
      song_display += "<div>by " + current_song.artist + "</div>";
      song_display += "<div>on the album " + current_song.album + "</div>";
      song_display += "</div>";
      song_display += "<div class='song-buttons'>";
      song_display += "<button class='delete-song'>Delete Song</button>";
      song_display += "</div>"
      song_display += "</li>";
      $("#song-list").append(song_display);
    }
  }


// create select menu of artist options
var uniqueArtists = [];
  function displayArtistMenu(songsList){
    $("#artist").children().remove();
    for (var i = 0; i < songsList.songs.length; i++) {
      var current_song = songsList.songs[i];
      var current_artist = current_song.artist;
      if($.inArray(current_artist, uniqueArtists) === -1) {
        uniqueArtists.push(current_artist);
      }
    }
    for (var i = 0; i < uniqueArtists.length; i++){
      var artist_display = "<option ";
      artist_display += "value='";
      artist_display += uniqueArtists[i].toLowerCase().replace(/ /g,'-');
      artist_display += "'>";
      artist_display += uniqueArtists[i];
      artist_display += "</option>";
      $("#artist").append(artist_display)
    }
  }

// create select menu of album options
var uniqueAlbums = [];
  function displayAlbumMenu(songsList){
    $("#album").children().remove();
    for (var i = 0; i < songsList.songs.length; i++) {
      var current_song = songsList.songs[i];
      var current_album = current_song.album;
      if($.inArray(current_album, uniqueAlbums) === -1) {
        uniqueAlbums.push(current_album);
      }
    }
    for (var i = 0; i < uniqueAlbums.length; i++){
      var album_display = "<option ";
      album_display += "value='";
      album_display += uniqueAlbums[i].toLowerCase().replace(/ /g,'-');
      album_display += "'>";
      album_display += uniqueAlbums[i];
      album_display += "</option>";
      $("#album").append(album_display)
    }
  }

  //load initial JSON file
  $.ajax({
    url:"./json/songs.json"
  }).done(function(songsList){
    displaySongList(songsList);
    displayArtistMenu(songsList);
    displayAlbumMenu(songsList);
  });

  //load additional JSON file
  $("#get-more-songs").click(function(){
    $.ajax({
      url:"./json/moresongs.json"
    }).done(function(songsList){
      displaySongList(songsList);
      displayArtistMenu(songsList);
      displayAlbumMenu(songsList);
    });
  });

  //click event to delete list item for song
  $("#song-list").on("click", "button", function(){
    console.log("remove click");
    $(this).parent().hide();
  });

});