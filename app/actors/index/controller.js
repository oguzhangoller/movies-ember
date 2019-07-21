import Controller from '@ember/controller';
import { computed, action } from 'ember-decorators/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  actors: alias('model'),
  meta: {},
  page: 1,

  @computed('meta.page')
  showPrevPageButton(page) {
    return page > 1;
  },

  @computed('meta.page', 'meta.totalPages')
  showNextPageButton(page, totalPages) {
    return page < totalPages;
  },

  @action
  showActor(actorId) {
    this.transitionToRoute('actors/show', actorId);
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
  },
});
