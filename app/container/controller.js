import Controller from '@ember/controller';
import { action } from 'ember-decorators/object';

export default Controller.extend({
  @action
  goToActors() {
    this.transitionToRoute('actors/index');
  },

  @action
  goToMovies() {
    this.transitionToRoute('movies/index');
  },
});
