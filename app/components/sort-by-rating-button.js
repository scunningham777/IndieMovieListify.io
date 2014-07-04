import Ember from 'ember';

export default Ember.Component.extend({
	isDescending: true,
	tagName: 'span',
	click: function() {
		this.set('isDescending', !this.isDescending);
		this.sendAction();
	}
});
