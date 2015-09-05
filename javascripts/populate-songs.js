//The populate-songs file should contain the AJAX call to your first JSON file with songs in it. This module should return the array of songs.

define(["jquery"], function($) {

	return {
		getSongs: function(callBack) {
			// console.log("getSongs for songs.json run");
			$.ajax({
			  url:"../json/songs.json"
			}).done(function(songsList) {
				callBack(songsList);
			});
		},
		logThisThing: function() {
			console.log("logThisThing run");
			return "this shouldn't be undefined";
		}
	};
});