import Ember from 'ember';

export default Ember.Route.extend({
/*	model: function(params) {
		return Ember.$.getJSON('http://netflixroulette.net/api/api.php?director=' + params.director_id);
	},
	*/
	setupController: function(controller, model){
//		this.set('controller.director', params.director_id);
		controller.set('director', model.director_name);
		Ember.$.getJSON('http://netflixroulette.net/api/api.php?director=' + model.director_name).then(function(data) {
			controller.set('movies', data);
			controller.set('isLoaded', true);
		});
	}
});
