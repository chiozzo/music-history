define(["jquery", "lodash", "hbsTemplateLoad"], function($, _, hbsTemplateLoad) {

	return {
		byArtist: function(selectedArtist, allSongsArray) {
			//filter #albumMenu based on selectedArtist
	    var filteredAlbums = _.chain(allSongsArray)
		                        .filter(function(song) {
	                            return song.artist === selectedArtist;
	                          })
	                          .uniq("album")
	                          .pluck("album")
	                          .value();
	    $("#albumMenu").html(hbsTemplateLoad.albumTemplate({albums:filteredAlbums}));

	    //filter #song-list based on selectedArtist
	    var filteredSongList = _.filter(allSongsArray, function(song) {
	                              return song.artist === selectedArtist;
	                            });
	    $("#song-list").html(hbsTemplateLoad.songTemplate({songs:filteredSongList}));
		},
		byAlbum: function(selectedAlbum, allSongsArray) {
			//filter #artistMenu based on selectedAlbum
	    var filteredArtist = _.chain(allSongsArray)
	                          .filter(function(song) {
	                            return song.album === selectedAlbum;
	                          })
	                          .uniq("artist")
	                          .pluck("artist")
	                          .value();
	    $("#artistMenu").html(hbsTemplateLoad.artistTemplate({artists:filteredArtist}));

	    //filter #song-list based on selectedAlbum
	    var filteredSongList = _.filter(allSongsArray, function(song) {
	                              return song.album === selectedAlbum;
	                            });
	    $("#song-list").html(hbsTemplateLoad.songTemplate({songs:filteredSongList}));
		},
		showAll: function(songs, allSongsArray) {
	    //populate #song-list
	    $("#song-list").html(hbsTemplateLoad.songTemplate({songs:songs}));

	    //populate #artistMenu
	    //pass in an array of objects, pluck the value of the defined key (artist) into an array, and make that array unique
			var uniqueArtists = _.chain(allSongsArray).pluck("artist").uniq().value();
	    $("#artistMenu").html(hbsTemplateLoad.artistTemplate({artists:uniqueArtists}));

	    //populate #albumMenu
	    //pass in an array of objects, exclude any object from the new array that already contains a matching values of the defined key, pluck the value of the defined key (album) into an array
			var uniqueAlbums = _.chain(allSongsArray).uniq("album").pluck("album").value();
	    $("#albumMenu").html(hbsTemplateLoad.albumTemplate({albums:uniqueAlbums}));
		}
	};
});