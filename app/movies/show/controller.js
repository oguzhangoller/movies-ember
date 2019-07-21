import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { computed, action } from 'ember-decorators/object';

export default Controller.extend({
  movie: alias('model'),
  recommendedMoviesList: [], //this is set on route
  similarMoviesList: [], //this is set on route

  init() {
    this._super(...arguments);
  },

  @computed('movie.categories')
  categories(categories) {
    return categories.slice(0, 3);
  },

  @computed('movie.actors')
  actors(actors) {
    return actors.slice(0, 3);
  },

  @action
  showMovie(movieId) {
    this.transitionToRoute('movies/show', movieId);
  },

  @action
  showActor(actorId) {
    this.transitionToRoute('actors/show', actorId);
  },
});
