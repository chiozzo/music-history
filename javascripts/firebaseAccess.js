define(["jquery", "firebase"], function($, firebase) {

	var firebaseRef = new Firebase("https://blinding-heat-7542.firebaseio.com/");

	return {
		getSongs: function(callBack) {
			$.ajax({
			  url:"https://blinding-heat-7542.firebaseio.com/.json"
			}).done(function(firebaseData) {
				// console.log("firebase is returning", firebaseData);
				callBack(firebaseData);
			});
		},
		deleteSong: function(thisSong) {
			$(thisSong).parents(".song-entry").hide('fast', function() {
	      $(thisSong).remove();
	    });
	    console.log(thisSong, firebaseRef.child("songs").child(thisSong) + "/.json");
	    var deleteRef = new Firebase(firebaseRef.child("songs") + thisSong);
	    console.log("deleteRef", deleteRef);
	    // deleteRef.remove(function() {
	    //   console.log("the song has been deleted");
	    // });
		},
		addSong: function(){
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
				console.log("addedSong", addedSong);
			});
		}
	};
});