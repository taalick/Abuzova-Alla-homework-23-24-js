requirejs.config({
	paths:{		
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min',
	},	
});

require(
	[
		'tmpl',
		'scriptModel',		
		'scriptView',
		'scriptController',
		'jquery',		
	],
	function(tmpl, scriptModel, scriptView, scriptController, $){	

		$(function(){
			var firstToDoList = ['learn javascript', 'learn html', 'learn scss'];
			var model = new scriptModel.Model(firstToDoList);
			var view = new scriptView.View(model);
			console.log('model', model);
			console.log('view', view);
			var controller = new scriptController.Controller(model, view);
		})
	}
);