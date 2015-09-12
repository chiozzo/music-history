// The dom-access module should return a reference to the DOM element in your HTML that will contain the song list.
define(["jquery"], function($) {

	return {
		makeSongList: function(songsList) {
/*
			for (var i = 0; i < songsList.length; i++) {
				var current_song = songsList[i];
				var song_display = "<li class='song-entry'>";
				song_display += "<div class='song-info'>";
				song_display += "<h1>" + current_song.title + "</h1>";
				song_display += "<div>by " + current_song.artist + "</div>";
				song_display += "<div>on the album " + current_song.album + "</div>";
				song_display += "</div>";
				song_display += "<div class='song-buttons'>";
				song_display += "<button class='delete-song'>Delete Song</button>";
				song_display += "</div>";
				song_display += "</li>";
				$(song_display).prependTo("#song-list");
			}
*/
			require(['hbs!../templates/songs'], function(songTemplate) {
				$(songTemplate(songsList)).prependTo("#song-list");
			});
		},
		makeArtistMenu: function(songsList) {
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
		},
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
	};
});