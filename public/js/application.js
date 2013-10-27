(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone',
		'gestalts/app_config',
		'routers'
	],

	function( Backbone, Config ) {

		var App = new Backbone.Marionette.Application();

		App.once('application:initialize:stage:ready', function() {
			if (!Backbone.History.started) Backbone.history.start();
		});

		/* Add application regions here */
		App.addRegions({
			stage: '#container'
		});

		/* Add initializers here */
		App.addInitializer( function () {
			var _this = this,
				stage = Config.stage;

			require([stage], function(StageView) {
				_this.stage.show(new StageView());
				App.trigger('application:initialize:stage:ready');
			});
		});

		root.App = App;
		return App;
	});
}).call( this );