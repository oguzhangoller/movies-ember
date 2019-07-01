import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { computed, action } from 'ember-decorators/object';

export default Controller.extend({
  actor: alias('model'),
  playedMoviesList: alias('model.movies'),

  @action
  showMovie(movieId) {
    this.transitionToRoute('movies/show', movieId);
  },
});
