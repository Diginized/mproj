Features = new Mongo.Collection('features');

;
if (Meteor.isClient) {
  Meteor.subscribe("Features");

  // counter starts at 0
  Session.setDefault('counter', 0);


  Template.showFeatures.helpers({
      'features': function(){
        return Features.find()     
        // return 'test'
      }
  });
  
  Template.editFeature.helpers({
      'features': function(){
        // return [
        //   {_id: "1", title: "test", status: "Minor", description: "this is my favorite feature"},
        //   {_id: "2", title: "a second feature", status: "Wishlist", description: "I like this one as well"}
        // ] 
        return Features.find(Session.get('featureid'))
      },
      'status': function(status){
        return this.status === status;
      }
      // ,
      // 'priorities': function(){
      //   var priorities = {options: ['wishlist','minor','normal','important','critical']}
      //   return priorities
      // },
      // 'prioptions': ['wishlist','minor','normal','important','critical']
  });

  Template.editFeature.events({
      'submit form': function(event){
        console.log('submitting edit feature form');
        event.preventDefault();
        var fields = {
          title: event.target.title.value,
          status: event.target.status.value,
          description: event.target.description.value
        }
        console.log(fields)
        Meteor.call('updateFeature' , event.target._id.value, fields);
        return false;
      }
  });


  
}

if (Meteor.isServer) {
  console.log("total features in datbase: " + Features.find().count());
  Meteor.publish("Features", function () {
    return Features.find()
  });
  Meteor.publish("OneFeature", function(_id){
    return Features.find(_id)
  });
  Meteor.startup(function () {
    // code to run on server at startup
    // Meteor.publish('features', function(){
    //   return Features.find();
    // });
  });
  Meteor.methods({
    // Methods go here
    'updateFeature': function(id, fields){
      Features.update(
        id,
        {$set: fields}
      )
    }
  });
}
