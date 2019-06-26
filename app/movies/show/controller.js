import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { action } from 'ember-decorators/object';

export default Controller.extend({
  movie: alias('model'),
  recommendedMoviesList: [], //this is set on route
  similarMoviesList: [], //this is set on route

  @action
  showMovie(movieId) {
    this.transitionToRoute('movies/show', movieId);
  },
});
