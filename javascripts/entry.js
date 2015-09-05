requirejs.config({
	baseURL: "./javascripts",
	paths: {
		"jquery": "../bower_components/jquery/dist/jquery.min",
		"bootstrap": "/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		"bootstrap": ["jquery"]
	}
});


require(["main"], function(main) {

});