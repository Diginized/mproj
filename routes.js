// Global router config
Router.configure({
  loadingTemplate: 'loading'
});


// Router.route('/add');

Router.route('/', function () {
  this.render('home');
});

Router.route('/addtask/:featureid', function(){
	this.render('insertTaskForm');
	Session.set('featureid', this.params.featureid );
});

Router.route('/edittask/:taskid', function(){
	this.render('editTaskForm');
	Session.set('taskid', this.params.taskid ); //this works just because there's a helper function listening to the session variable and returning it to the template
	var taskid = params.taskid;  //this doesn't seem to do anything, but I think there's supposed to be a way to pass variables into the template wtihout a helper
});

Router.route('/addfeature', function(){
	this.render('insertFeatureForm');
});

// Router.route('/editfeature/:featureid', function(){
// 	this.render('editFeature', {
// 		notFoundTemplate: "featureNotFound"
// 		// waitOn: function() {
// 		// 	return Meteor.subscribe("Features");
// 		// },
// 		// data: function() {
// 		// 	templateData = {features: Features.find({_id: "86t6WerrwxPoTyyNn"}) };
// 	 //    	return templateData;
// 	 //  	}
// 	});
// });


// Data context from a collection
Router.route('editFeature', {  //first line points to the template name (binding)
	path: 'authors/:featureid', 
  	data: function() {
    	templateData = { features: Features.find({_id: this.params.featureid}) };  //features in this case points to the EACH statement
    	return templateData;
  	}
});


Router.route('/showfeatures', function(){
	this.render('showFeatures');
});
