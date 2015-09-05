define(["jquery", "dom-access", "populate-songs", "get-more-songs"], function($, domAccess, populateSongs, getMoreSongs) {


$(document).ready(function(){

  //CALLBACK FUNCTION to create list item for displaying song information
  function displaySongList(songsList){
    for (var i = 0; i < songsList.songs.length; i++) {
      var current_song = songsList.songs[i];
      var song_display = "<li class='song-entry'>";
      song_display += "<div class='song-info'>";
      song_display += "<h1>" + current_song.title + "</h1>";
      song_display += "<div>by " + current_song.artist + "</div>";
      song_display += "<div>on the album " + current_song.album + "</div>";
      song_display += "</div>";
      song_display += "<div class='song-buttons'>";
      song_display += "<button class='delete-song'>Delete Song</button>";
      song_display += "</div>";
      song_display += "</li>";
      $(song_display).prependTo(domAccess.getSongListEl());
    }
  }

  //CALLBACK FUNCTION to create select menu of artist options
  var uniqueArtists = [];
    function displayArtistMenu(songsList){
      $(domAccess.getArtistMenuEl()).children().remove();
      for (var i = 0; i < songsList.songs.length; i++) {
        var current_song = songsList.songs[i];
        var current_artist = current_song.artist;
        if($.inArray(current_artist, uniqueArtists) === -1) {
          uniqueArtists.push(current_artist);
        }
      }
      for (var j = 0; j < uniqueArtists.length; j++){
        var artist_display = "<option ";
        artist_display += "value='";
        artist_display += uniqueArtists[j].toLowerCase().replace(/ /g,'-');
        artist_display += "'>";
        artist_display += uniqueArtists[j];
        artist_display += "</option>";
        $(artist_display).appendTo(domAccess.getArtistMenuEl());
      }
    }

  //CALLBACK FUNCTION to create select menu of album options
  var uniqueAlbums = [];
    function displayAlbumMenu(songsList){
      $(domAccess.getAlbumMenuEl()).children().remove();
      for (var i = 0; i < songsList.songs.length; i++) {
        var current_song = songsList.songs[i];
        var current_album = current_song.album;
        if($.inArray(current_album, uniqueAlbums) === -1) {
          uniqueAlbums.push(current_album);
        }
      }
      for (var j = 0; j < uniqueAlbums.length; j++){
        var album_display = "<option ";
        album_display += "value='";
        album_display += uniqueAlbums[j].toLowerCase().replace(/ /g,'-');
        album_display += "'>";
        album_display += uniqueAlbums[j];
        album_display += "</option>";
        $(album_display).appendTo(domAccess.getAlbumMenuEl());
      }
    }

  //load initial JSON file
  populateSongs.getSongs(displaySongList);
  populateSongs.getSongs(displayArtistMenu);
  populateSongs.getSongs(displayAlbumMenu);

  console.log("does this log work?", populateSongs.logThisThing());

  //load additional JSON file
  $("#get-more-songs").click(function() {
    getMoreSongs.getSongs(displaySongList);
    getMoreSongs.getSongs(displayArtistMenu);
    getMoreSongs.getSongs(displayAlbumMenu);
  });

  //click event to delete list item for song
  $("#song-list").on("click", ".delete-song", function(){
    console.log("remove click");
    $(this).parents(".song-entry").remove();
  });
});
});