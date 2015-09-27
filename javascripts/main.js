requirejs.config({
  baseURL: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min",
    "noslider": "../lib/noUiSlider.8.0.2/nouislider.min"
  },
  shim: {
    "bootstrap": ["jquery"],
    "material": ["bootstrap", "noslider"],
    "firebase": {
      exports: "Firebase"
    }
  }
});

require(["jquery", "lodash", "firebase", "hbs", "getUnique", "hbsTemplateLoad", "noslider", "bootstrap", "material"],
 function($, _, firebase, handlebars, getUnique, hbsTemplateLoad, noUiSlider) {

$(document).ready(function(){

  //initialize Material design with Bootstrap
  $.material.init();

/*
  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      'min': 0,
      'max': 100
    }
  });
*/

  var myFirebaseRef = new Firebase("https://blinding-heat-7542.firebaseio.com/");

  myFirebaseRef.child("songs").on("value", function(mycurrentstuff) {

  var songs = mycurrentstuff.val();

  allSongsArray = [];

  for (var currentkey in songs) {
    allSongsArray[allSongsArray.length] = songs[currentkey];
  }

  $("#song-list").html(hbsTemplateLoad.songTemplate({songs:songs}));

  var uniqueArtists = getUnique(allSongsArray).uniqueArtists;
  $("#artistMenu").html(hbsTemplateLoad.artistTemplate({artists:uniqueArtists}));

  var uniqueAlbums = getUnique(allSongsArray).uniqueAlbums;
  $("#albumMenu").html(hbsTemplateLoad.albumTemplate({albums:uniqueAlbums}));

  });

  //click event to delete list item for song-entry
  $("#song-list").on("click", ".delete-song", function(){
    $(this).parents(".song-entry").hide('fast', function() {
      $(this).remove();
    });
    console.log(this.id, "https://blinding-heat-7542.firebaseio.com/songs/" + this.id.split("#")[1] + ".json");
    var deleteRef = new Firebase("https://blinding-heat-7542.firebaseio.com/songs/" + this.id.split("#")[1]);
    console.log("deleteRef", deleteRef);
    deleteRef.remove(function() {
      console.log("the song has been deleted");
    });
/*
    $.ajax({
      url: "https://blinding-heat-7542.firebaseio.com/songs/" + this.id.split("#")[1] + ".json",
      method: "DELETE",
      contentType: "application/json"
    }).done(function(song) {
      console.log(song, "has been deleted");
    }).fail(function(error) {
      console.log(error);
    });
*/
  });
});
});