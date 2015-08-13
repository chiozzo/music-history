$(document).ready(function(){

  //create list item for displaying song information
  function songCallback(songsList){
    for (var i = 0; i < songsList.songs.length; i++) {
      var current_song = songsList.songs[i];
      var song_display = "<li>";
      song_display += "<h1>" + current_song.title + "</h1>";
      song_display += "<div>by " + current_song.artist + "</div>";
      song_display += "<div>on the album " + current_song.album + "</div>";
      song_display += "<button class='delete-song'>Delete Song</button>";
      song_display += "</li>";
      $("#song-list").append(song_display);
    }
  }

  //load initial JSON file
  $.ajax({
    url:"./json/songs.json"
  }).done(songCallback);

  //load additional JSON file
  $("#get-more-songs").click(function(){
    $.ajax({
      url:"./json/moresongs.json"
    }).done(songCallback);
  });

  //click event to delete list item for song
  $("#song-list").on("click", "button", function(){
    console.log("remove click");
    $(this).parent().hide();
  });

});