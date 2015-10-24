define(["jquery", "firebase"], function($, firebase) {

	var firebaseRef = new firebase("https://blinding-heat-7542.firebaseio.com/");

return {
	registerNewUser: function() {
		firebaseRef.createUser({
	    email: "mncross@gmail.com",
	    password: "abc123"
	  }, function(error, userData) {
	    if (error) {
	      console.log("Error creating user:", error);
	    } else {
	      console.log("Successfully created user account with payload: ", userData);
	    }
	  });
	},
	loginUser: function(email, password) {
		firebaseRef.authWithPassword({
      email: email,
      password: password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
	}
}
});