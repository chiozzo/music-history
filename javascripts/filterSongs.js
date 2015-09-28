define(["jquery", "lodash", "hbsTemplateLoad", "getUnique"], function($, _, hbsTemplateLoad, getUnique) {

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
			console.log("songs", songs);
			console.log("allSongsArray", allSongsArray);
	    //populate #song-list
	    $("#song-list").html(hbsTemplateLoad.songTemplate({songs:songs}));

	    //populate #artistMenu
	    var uniqueArtists = getUnique(allSongsArray).uniqueArtists;
	    $("#artistMenu").html(hbsTemplateLoad.artistTemplate({artists:uniqueArtists}));

	    //populate #albumMenu
	    var uniqueAlbums = getUnique(allSongsArray).uniqueAlbums;
	    $("#albumMenu").html(hbsTemplateLoad.albumTemplate({albums:uniqueAlbums}));
		}
	};
});