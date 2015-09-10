define(["jquery", "dom-access", "populate-songs", "get-more-songs", "bootstrap"], function($, domAccess, populateSongs, getMoreSongs) {

$(document).ready(function(){

  //load initial JSON file
  populateSongs.getSongs(domAccess.makeSongList);
  populateSongs.getSongs(domAccess.makeArtistMenu);
  populateSongs.getSongs(domAccess.makeAlbumMenu);

  console.log("does this log work?", populateSongs.logThisThing());

  //load additional JSON file
  $("#get-more-songs").one("click", function() {
    getMoreSongs.getSongs(domAccess.makeSongList);
    getMoreSongs.getSongs(domAccess.makeArtistMenu);
    getMoreSongs.getSongs(domAccess.makeAlbumMenu);
  });

  //click event to delete list item for song
  $("#song-list").on("click", ".delete-song", function(){
    console.log("remove click");
    $(this).parents(".song-entry").remove();
  });
});
});