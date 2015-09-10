//The get-more-songs file should contain the AJAX call to your second JSON file with songs in it. This module should return the array of songs.

define(["jquery"], function($) {

	return {
		getSongs: function(callBack) {
			// console.log("getSongs for moresongs.json run");
	    $.ajax({
	      url:"../json/moresongs.json"
	    }).done(function(songsList) {
				callBack(songsList.songs);
	    });
		}
	};
});