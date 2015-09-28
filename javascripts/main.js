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

require(["jquery", "lodash", "firebase", "hbs", "noslider", "getUnique", "hbsTemplateLoad", "firebaseAccess", "filterSongs", "bootstrap", "material"],
 function($, _, firebase, handlebars, noUiSlider, getUnique, hbsTemplateLoad, firebaseAccess, filterSongs) {

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

  //create Firebase reference
  var myFirebaseRef = new Firebase("https://blinding-heat-7542.firebaseio.com/");
  var songs;
  var allSongsArray = [];

  //Event handler on value change of "songs" key in firebase reference
  myFirebaseRef.child("songs").on("value", function(mycurrentstuff) {
    songs = mycurrentstuff.val();

    //convert object of object into array of objects
    allSongsArray = [];
    for (var currentkey in songs) {
      allSongsArray.push(songs[currentkey]);
    }

    filterSongs.showAll(songs, allSongsArray);
  });

  //click event to filter based on artist
  $("#artistMenu").on("click", "li > a", function() {
    var selectedArtist = $(this).html();
    filterSongs.byArtist(selectedArtist, allSongsArray);
  });

  //click event to filter based on artist
  $("#albumMenu").on("click", "li > a", function() {
    var selectedAlbum = $(this).html();
    filterSongs.byAlbum(selectedAlbum, allSongsArray);
  });

  //click event to clear filters
  $("#clearFilter").on("click", function() {
    filterSongs.showAll(songs, allSongsArray);
  });

  //click event to delete list item for song-entry from database
  $("#song-list").on("click", ".delete-song", function(){
    var thisSong = this;
    firebaseAccess.deleteSong(myFirebaseRef, thisSong);
  });
});
});