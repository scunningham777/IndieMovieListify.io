import Ember from 'ember';

var Router = Ember.Router.extend({
  location: IndieENV.locationType
});

Router.map(function() {
  this.route('director', {path: 'directors/:director_name'});
});

export default Router;
