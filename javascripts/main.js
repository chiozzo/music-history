requirejs.config({
  baseURL: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min",
    "dropdownjs": "../lib/bower_components/dropdown.js/jquery.dropdown",
    "q": "../lib/bower_components/q/q"
  },
  shim: {
    "bootstrap": ["jquery"],
    "dropdownjs": ["jquery"],
    "material": ["bootstrap"],
    "firebase": {
      exports: "Firebase"
    }
  }
});

require(["jquery", "lodash", "q", "firebase", "hbs", "bootstrap", "material", "dropdownjs", "authenticate", "hbsTemplateLoad", "firebaseAccess", "filterSongs"],
 function($, _, q, firebase, handlebars, bootstrap, material, dropdownjs, authenticate, hbsTemplateLoad, firebaseAccess, filterSongs) {

$(document).ready(function(){

  //initialize Material design with Bootstrap
  $.material.init();
  $(".select").dropdown({ "autoinit" : ".select" });

  var firebaseRef = new Firebase("https://blinding-heat-7542.firebaseio.com/");
  var songs;
  var allSongsArray = [];

  // authenticate.loginUser("mncross@gmail.com", "abc123");

  firebaseRef.child("songs").on("value", function(mycurrentstuff) {
    songs = mycurrentstuff.val();
    allSongsArray = _.values(songs);
    filterSongs.showAll(songs, allSongsArray);
  });


  $(".modal-footer").on("click", "#add-song", function() {
    if($("#new-artist").val() === "") {
      alert("You need to enter an artist");
    } else if ($("#new-album").val() === "") {
      alert("You need to enter an album");
    } else if ($("#new-song").val() === "") {
      alert("You need to enter a song title");
    } else {
      console.log("add song button clicked");
      firebaseAccess.addSong();
    }
    $("#new-artist").val("");
    $("#new-album").val("");
    $("#new-song").val("");
  });

  //click event to filter based on artist
  $("#artistMenu").on("click", "option", function() {
    var selectedArtist = $(this).text();
    console.log("selectedArtist", selectedArtist);
    filterSongs.byArtist(selectedArtist, allSongsArray);
  });

  //click event to filter based on artist
  $("#albumMenu").on("click", "option", function() {
    var selectedAlbum = $(this).text();
    filterSongs.byAlbum(selectedAlbum, allSongsArray);
  });

  //click event to clear filters
  $("#clearFilter").on("click", function() {
    filterSongs.showAll(songs, allSongsArray);
  });

  //click event to delete list item for song-entry from database
  $("#song-list").on("click", ".delete-song", function(){
    var thisSong = $(this).attr("songid");
    console.log("thisSong", thisSong);
    firebaseAccess.deleteSong(thisSong);
  });
});
});