requirejs.config({
  baseURL: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min"
  },
  shim: {
    "bootstrap": ["jquery"],
    "material": ["bootstrap"],
    "firebase": {
      exports: "Firebase"
    }
  }
});

require(["jquery", "lodash", "firebase", "hbs", "getUnique", "hbsTemplateLoad", "firebaseAccess", "filterSongs", "bootstrap", "material"],
 function($, _, firebase, handlebars, getUnique, hbsTemplateLoad, firebaseAccess, filterSongs) {

$(document).ready(function(){

  //initialize Material design with Bootstrap
  $.material.init();

  //create Firebase reference
  var myFirebaseRef = new Firebase("https://blinding-heat-7542.firebaseio.com/");
  var songs;
  var allSongsArray = [];

  //create new user upon registration
  myFirebaseRef.createUser({
    email: "mncross@gmail.com",
    password: "abc123"
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid: ", userData.uid);
    }
  });

  //log in new user
  var currentUser;
  $("#signInButton").on('click', function() {
    console.log("username", $("#usernameInput").val());
    console.log("password", $("#passwordInput").val());
    myFirebaseRef.authWithPassword({
      email: $("#usernameInput").val(),
      password: $("#passwordInput").val()
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        currentUser = authData;
        console.log("currentUser", currentUser);
      }
    }, {
        remember: "sessionOnly"
    });

  });

  console.log(currentUser.uid);
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
    var selectedArtist = $(this).text();
    filterSongs.byArtist(selectedArtist, allSongsArray);
  });

  //click event to filter based on artist
  $("#albumMenu").on("click", "li > a", function() {
    var selectedAlbum = $(this).text();
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