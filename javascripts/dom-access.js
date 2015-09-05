// The dom-access module should return a reference to the DOM element in your HTML that will contain the song list.
define(["jquery"], function($) {

	return {
		getSongListEl: function() {
			return $("#song-list");
		},
		getArtistMenuEl: function() {
			return $("#artist");
		},
		getAlbumMenuEl: function() {
			return $("#album");
		}
	};
});