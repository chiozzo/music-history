define(["lodash"], function(_) {

	return function(allSongsArray) {

		//pass in an array of objects, pluck the value of the defined key (artist) into an array, and make that array unique
		var uniqueArtists = _.chain(allSongsArray).pluck("artist").uniq().value();

		//pass in an array of objects, exclude any object from the new array that already contains a matching values of the defined key, pluck the value of the defined key (album) into an array
		var uniqueAlbums = _.chain(allSongsArray).uniq("album").pluck("album").value();

		return {
			uniqueArtists: uniqueArtists,
			uniqueAlbums: uniqueAlbums
		};
	};
});