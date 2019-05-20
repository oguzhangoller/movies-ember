import Controller from '@ember/controller';
import { computed, action } from 'ember-decorators/object';

export default Controller.extend({
  categories: null, // this is set on route
  selectedCategories: [],

  @action
  addCategory(category) {
    this.get('selectedCategories').pushObject(category)
  },

  @action
  save() {
    debugger;
  },
});
