requirejs.config({
  baseURL: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase"
  },
  shim: {
    "bootstrap": ["jquery"]
  }
});

require(["jquery", "lodash", "firebase", "hbs", "firebaseAccess", "getUnique", "hbsTemplateLoad", "bootstrap"],
 function($, _, firebase, handlebars, firebaseAccess, getUnique, hbsTemplateLoad) {

$(document).ready(function(){


  firebaseAccess.getSongs(function(songsObject) {

    $("#song-list").html(hbsTemplateLoad.songTemplate(songsObject));
    // require(['hbs!../templates/songs'], function(songTemplate) {
    //   $(songTemplate(songsObject)).prependTo("#song-list");
    // });

    // var uniqueArtists = getUnique(songsObject.songs).uniqueArtists;
    var uniqueArtists = _.chain(songsObject.songs).uniq("artist").pluck("artist").value();
    // console.log("uniqueArtists", uniqueArtists);

    $("#artistMenu").html(hbsTemplateLoad.artistTemplate({artist:uniqueArtists}));
    // require(["hbs!../templates/artistmenu"], function(artistTemplate) {
    //   console.log("build artist menu");
    //   $("#artistMenu").html(artistTemplate(songsObject));
    // });

    var uniqueAlbums = getUnique(songsObject.songs).uniqueAlbums;
    // var uniqueAlbums = _.chain(songsObject.songs).uniq("album").pluck("album").value();
    // console.log("uniqueAlbums", uniqueAlbums);

    $("#albumMenu").html(hbsTemplateLoad.albumTemplate(songsObject));
    // require(["hbs!../templates/albummenu"], function(albumTemplate) {
    //   console.log("build album menu");
    //   $("#albumMenu").append(albumTemplate(songsObject));
    // });

  });




  //click event to delete list item for song-entry
  $("#song-list").on("click", ".delete-song", function(){
    $(this).parents(".song-entry").hide('fast', function() {
      $(this).remove();
    });
  });
});

});