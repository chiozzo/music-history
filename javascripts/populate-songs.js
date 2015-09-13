define(["jquery"], function($) {

	return {
		getSongs: function(callBack) {
			// console.log("getSongs for songs.json run");
			$.ajax({
			  url:"https://blinding-heat-7542.firebaseio.com/.json"
			}).done(function(firebaseData) {
				callBack(firebaseData);
			});
		}
	};
});