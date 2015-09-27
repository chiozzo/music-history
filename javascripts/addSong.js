requirejs.config({
  baseURL: "./javascripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
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

require(["jquery", "bootstrap"],
 function($) {

$("#new-artist").focus();

var addSongToFirebase = function() {
	var newSong = {
		"artist": $("#new-artist").val(),
		"album": $("#new-album").val(),
		"title": $("#new-song").val()
	};

	$.ajax({
		url: "https://blinding-heat-7542.firebaseio.com/songs.json",
		method: "POST",
		data: JSON.stringify(newSong)
	}).done(function(addedSong) {
	});

	$("#new-artist").val("");
	$("#new-album").val("");
	$("#new-song").val("");

	$("#new-artist").focus();

};


	$("#add-song").click(function() {
		addSongToFirebase();
	});

	$(document).keypress(function(key) {
		if (key.which === 13) {
			addSongToFirebase();
		}
	});
});