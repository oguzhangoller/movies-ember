import Controller from '@ember/controller';
import { computed, action } from 'ember-decorators/object';

export default Controller.extend({
  categories: null, // this is set on route

  @action
  onSuccess(movie) {
    this.transitionToRoute('movies/show', movie.get('id'));
  },
});
