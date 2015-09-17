define(["lodash"], function(_) {

	return function(allSongsArray) {

		//pass in an array of objects, pluck the value of the defined key (artist) into an array, and make that array unique
		var uniqueArtists = _.chain(allSongsArray).pluck("artist").uniq().value();

		//pass in an array of objects, exclude any object from the new array that already contains a matching values of the defined key, pluck the value of the defined key (album) into an array
		var uniqueAlbums = _.chain(allSongsArray).uniq("album").pluck("album").value();

		return {
			uniqueArtists: uniqueArtists,
/*
			makeArtistMenu: function(songsList) {
				var uniqueArtists = .chain(songsList.).uniq().pluck().val();
				var uniqueArtists = [];
				$("#artist").children().remove();
				for (var i = 0; i < songsList.songs.length; i++) {
					var current_song = songsList.songs[i];
					var current_artist = current_song.artist;
					if($.inArray(current_artist, uniqueArtists) === -1) {
						uniqueArtists.push(current_artist);
					}
				}
				for (var j = 0; j < uniqueArtists.length; j++){
					var artist_display = "<option ";
					artist_display += "value='";
					artist_display += uniqueArtists[j].toLowerCase().replace(/ /g,'-');
					artist_display += "'>";
					artist_display += uniqueArtists[j];
					artist_display += "</option>";
					$(artist_display).appendTo("#artist");
				}
			}
*/
			uniqueAlbums: uniqueAlbums
/*
			makeAlbumMenu: function(songsList) {
				var uniqueAlbums = [];
				$("#album").children().remove();
				for (var i = 0; i < songsList.songs.length; i++) {
					var current_song = songsList.songs[i];
					var current_album = current_song.album;
					if($.inArray(current_album, uniqueAlbums) === -1) {
						uniqueAlbums.push(current_album);
					}
				}
				for (var j = 0; j < uniqueAlbums.length; j++){
					var album_display = "<option ";
					album_display += "value='";
					album_display += uniqueAlbums[j].toLowerCase().replace(/ /g,'-');
					album_display += "'>";
					album_display += uniqueAlbums[j];
					album_display += "</option>";
					$(album_display).appendTo("#album");
				}
			}
*/
		};
	};
});