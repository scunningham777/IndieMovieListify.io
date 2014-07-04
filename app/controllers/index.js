import Ember from 'ember';

export default Ember.ObjectController.extend({
	sortProperties: ['rating:desc'],
	isDescending: true,
	sortedMovies: Ember.computed.sort('movies', 'sortProperties'),
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
	},
	movies: [
		{
			show_title: "Donnie Darko",
			release_year: "2001",
			rating: "3.9",
			director: "Richard Kelly",
			summary: "Writer-director Richard Kelly's trippy, mind-bending feature debut stars Jake Gyllenhaal as a troubled Midwestern teenager plagued by incessant sleepwalking, family drama and visions of a menacing 6-foot-tall, doomsday-prophesying rabbit.",
			poster: "http://netflixroulette.net/api/posters/60022315.jpg",
			runtime: "113 min"
		},
		{
			show_title: "The Pianist",
			release_year: "2002",
			rating: "4.1",
			director: "Roman Polanski",
			summary: "Famed Polish pianist Wladyslaw Szpilman struggles to survive the onslaught of Nazi tyranny during World War II in this drama based on his memoirs. In spite of his well-known talent, Szpilman spends several years holed up in Warsaw, clinging to life.",
			poster: "http://netflixroulette.net/api/posters/60025061.jpg",
			runtime: "150 min"
		},
		{
			show_title: "Clerks",
			release_year: "1994",
			rating: "3.7",
			director: "Kevin Smith",
			summary: "Store clerks Dante and Randal are sharp-witted, potty-mouthed, and bored out of their minds. So in between needling customers, the counter jockeys play hockey, visit a funeral home and deal with their love lives in this classic indie comedy.",
			poster: "http://netflixroulette.net/api/posters/382722.jpg",
			runtime: "22 min"
		},
		{
			show_title: "Lock, Stock and Two Smoking Barrels",
			release_year: "1998",
			rating: "3.9",
			director: "Guy Ritchie",
			summary: "Hoping to make a bundle in a high-stakes poker game, four shiftless lads from London's East End instead find themselves swimming in debt to underworld porn king 'Hatchet' Harry -- and with only a week to repay him.",
			poster: "http://netflixroulette.net/api/posters/16944044.jpg",
			runtime: "107 min"
		},
		{
			show_title: "Trainspotting",
			release_year: "1996",
			rating: "3.8",
			director: "Danny Boyle",
			summary: "Danny Boyle's explosive 1996 film tracks the misadventures of young men (played by a cast that includes Ewan MacGregor, Robert Carlyle and Jon Lee Miller) trying to find their way out of joblessness, aimless relationships and drug addiction. Some are successful, while others are hopelessly not. Based on Irvine Walsh's novel, Trainspotting melds grit with poetry, resulting in a film of harsh truths and stunning grace.",
			poster: "http://netflixroulette.net/api/posters/60037022.jpg",
			runtime: "94 min"
		},
		{
			show_title: "Reservoir Dogs",
			release_year: "1992",
			rating: "4.0",
			director: "Quentin Tarantino",
			summary: "Quentin Tarantino's directorial debut is raw, violent, often mimicked -- and unforgettable. A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors unravel.",
			poster: "http://netflixroulette.net/api/posters/902003.jpg",
			runtime: "99 min"
		},
		{
			show_title: "The Usual Suspects",
			release_year: "1995",
			rating: "4.3",
			director: "Bryan Singer",
			summary: "When five unacquainted crooks are hauled into a police station to appear in a criminal lineup, they decide to pull off a heist together. The plan gets complicated, however, when they intermix with an underworld kingpin named Keyser S&#246;ze.",
			poster: "http://netflixroulette.net/api/posters/1084379.jpg",
			runtime: "106 min"
		},
		{
			show_title: "Pulp Fiction",
			release_year: "1994",
			rating: "4.1",
			director: "Quentin Tarantino",
			summary: "Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit.",
			poster: "http://netflixroulette.net/api/posters/880640.jpg",
			runtime: "154 min"
		},
		{
			show_title: "Memento",
			release_year: "2000",
			rating: "3.8",
			director: "Christopher Nolan",
			summary: "Suffering short-term memory loss after a head injury, Leonard Shelby embarks on a grim quest to find out who murdered his wife. Shelby snaps Polaroids of people and places, jotting down contextual notes on the backs of photos to aid in his search.",
			poster: "http://netflixroulette.net/api/posters/60020435.jpg",
			runtime: "113 min"
		},
		{
			show_title: "Manhattan",
			release_year: "1979",
			rating: "3.7",
			director: "Woody Allen",
			summary: "In this insightful slice of life, television writer Isaac Davis -- who's in the throes of a midlife crisis -- finds himself torn between an adoring high schooler and his best friend's high-maintenance mistress.",
			poster: "http://netflixroulette.net/api/posters/60001266.jpg",
			runtime: "96 min"
		}
	]
});
