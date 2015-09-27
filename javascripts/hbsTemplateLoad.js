define(["hbs!../templates/songs", "hbs!../templates/artistmenu", "hbs!../templates/albummenu", "hbs"],
function(songHbsTemplate, artistHbsTemplate, albumHbsTemplate) {

	return {
		songTemplate: function(firebaseObject) {
			// console.log("song template returned");
			return songHbsTemplate(firebaseObject);
		},
		artistTemplate: function(firebaseObject) {
			// console.log("artist template returned");
			return artistHbsTemplate(firebaseObject);
		},
		albumTemplate: function (firebaseObject) {
			// console.log("album template returned");
			return albumHbsTemplate(firebaseObject);
		}
	};

});