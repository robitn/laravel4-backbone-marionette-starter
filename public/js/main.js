(function() {
    'use strict';

    var root = this;

    root.require([
		'backbone',
		'application'
	],
	function ( Backbone, App ) {
		// remove our startup onError handler (that was set in index.html)
		window.onerror = undefined;

		App.start();
	});
}).call( this );