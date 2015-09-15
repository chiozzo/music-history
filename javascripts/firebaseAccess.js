define(["jquery"], function($) {

	return {
		getSongs: function(callBack) {
			$.ajax({
			  url:"https://blinding-heat-7542.firebaseio.com/.json"
			}).done(function(firebaseData) {
				// console.log("firebase is returning", firebaseData);
				callBack(firebaseData);
			});
		}
	};
});