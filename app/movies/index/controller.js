import Controller from '@ember/controller';
import { computed, action } from 'ember-decorators/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  movies: alias('model'),
  meta: {},

  @computed('meta.page')
  showPrevPageButton(page){
    return page > 1;
  },

  @computed('meta.page', 'meta.totalPages')
  showNextPageButton(page, totalPages){
    return page < totalPages;
  },

  @action
  showMovie(movieId) {
    this.transitionToRoute('movies/show', movieId);
  },

  @action
  nextPage() {
    let page = this.get('page');
    this.set('page', parseInt(page) + 1);
  },

  @action
  prevPage() {
    let page = this.get('page');
    this.set('page', parseInt(page) - 1);
  }
});
