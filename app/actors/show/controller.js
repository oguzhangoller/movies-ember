import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { computed, action } from 'ember-decorators/object';

export default Controller.extend({
  actor: alias('model'),

  @action
  showMovie(movieId) {
    this.transitionToRoute('movies/show', movieId);
  },

  @computed('model.movies')
  playedMoviesListFirstHalf(movies) {
    return movies.slice(0, 3);
  },

  @computed('model.movies')
  playedMoviesListSecondHalf(movies) {
    return movies.slice(3, 6);
  },
});
