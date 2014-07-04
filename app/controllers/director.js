import Ember from 'ember';

export default Ember.ObjectController.extend({
	director: null,
	isLoaded: false,
	sortProperties: ['rating:desc'],
	isDescending: true,
	sortedMovies: Ember.computed.sort('movies', 'sortProperties'),
	movies: [],
	actions: {
		toggleSort: function() {
			if (this.isDescending) {
				this.set('isDescending', false);
				this.set('sortProperties', ['rating:asc']);
			}
			else {
				this.set('isDescending', true);
				this.set('sortProperties', ['rating:desc']);
			}
		}
	}
});
