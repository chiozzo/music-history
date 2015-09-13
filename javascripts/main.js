requirejs.config({
  baseURL: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
  },
  shim: {
    "bootstrap": ["jquery"]
  }
});

require(["jquery", "hbs", "dom-access", "populate-songs", "get-more-songs", "bootstrap"], function($, Handlebars, domAccess, populateSongs, getMoreSongs) {

$(document).ready(function(){

  populateSongs.getSongs(function(songsList) {
                          require(['hbs!../templates/songs'], function(songTemplate) {
                            $(songTemplate(songsList)).prependTo("#song-list");
                          });
                        });
  populateSongs.getSongs(domAccess.makeArtistMenu);
  populateSongs.getSongs(domAccess.makeAlbumMenu);

  //click event to delete list item for song-entry
  $("#song-list").on("click", ".delete-song", function(){
    $(this).parents(".song-entry").hide('fast', function() {
      $(this).remove();
    });
  });
});

});