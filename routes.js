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

Router.route('/editfeature/:featureid', function(){
	this.render('editFeature');
	Session.set('featureid', this.params.featureid );
});

Router.route('/editfeature/', function(){
	this.render('editFeature');
});

Router.route('/showfeatures', function(){
	this.render('showFeatures');
});
