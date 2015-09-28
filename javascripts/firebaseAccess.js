define(["jquery"], function($) {

	return {
		getSongs: function(callBack) {
			$.ajax({
			  url:"https://blinding-heat-7542.firebaseio.com/.json"
			}).done(function(firebaseData) {
				// console.log("firebase is returning", firebaseData);
				callBack(firebaseData);
			});
		},
		deleteSong: function(myFirebaseRef, thisSong) {
			$(thisSong).parents(".song-entry").hide('fast', function() {
	      $(thisSong).remove();
	    });
	    console.log(thisSong.id, myFirebaseRef.child("songs") + thisSong.id.split("#")[1] + ".json");
	    var deleteRef = new Firebase(myFirebaseRef.child("songs") + thisSong.id.split("#")[1]);
	    console.log("deleteRef", deleteRef);
	    // deleteRef.remove(function() {
	    //   console.log("the song has been deleted");
	    // });
/*
	    $.ajax({
	      url: "https://blinding-heat-7542.firebaseio.com/songs/" + this.id.split("#")[1] + ".json",
	      method: "DELETE",
	      contentType: "application/json"
	    }).done(function(song) {
	      console.log(song, "has been deleted");
	    }).fail(function(error) {
	      console.log(error);
	    });
*/
		}
	};
});