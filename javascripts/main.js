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
    "bootstrap": ["jquery"],
    "firebase": {
      exports: "Firebase"
    }
  }
});

require(["jquery", "lodash", "firebase", "hbs", "getUnique", "hbsTemplateLoad", "bootstrap"],
 function($, _, firebase, handlebars, getUnique, hbsTemplateLoad) {

$(document).ready(function(){

  var myFirebaseRef = new Firebase("https://blinding-heat-7542.firebaseio.com/");

  myFirebaseRef.child("songs").on("value", function(snapshot) {

  var songs = snapshot.val();
  // console.log("firebase songs", songs);

  allSongsArray = [];

  for (var key in songs) {
    allSongsArray[allSongsArray.length] = songs[key];
  }

  $("#song-list").html(hbsTemplateLoad.songTemplate({songs:songs}));

  var uniqueArtists = getUnique(allSongsArray).uniqueArtists;
  // console.log("uniqueArtists array", uniqueArtists);
  $("#artistMenu").html(hbsTemplateLoad.artistTemplate({artists:uniqueArtists}));

  var uniqueAlbums = getUnique(allSongsArray).uniqueAlbums;
  // console.log("uniqueAlbums", uniqueAlbums);
  $("#albumMenu").html(hbsTemplateLoad.albumTemplate({albums:uniqueAlbums}));

  });


  //click event to delete list item for song-entry
  $("#song-list").on("click", ".delete-song", function(){
    $(this).parents(".song-entry").hide('fast', function() {
      $(this).remove();
    });
  });
});

});