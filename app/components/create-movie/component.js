import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { action } from 'ember-decorators/object';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default Component.extend({
  store: service(),
  name: null,
  description: null,
  rating: null,
  year: null,
  selectedCategories: [],

  propTypes: {
    categories: PropTypes.any.isRequired,
    onSuccess: PropTypes.func.isRequired,
  },

  @action
  addCategory(val) {
    this.set('selectedCategories', []);

    this.set(
      'selectedCategories',
      val.map(id => {
        return this.store.peekRecord('category', id);
      })
    );
  },

  createMovieTask: task(function*() {
    const name = this.get('name');
    const description = this.get('description');
    const year = this.get('year');
    const rating = this.get('rating');
    const categories = this.get('selectedCategories');
    let movie = this.get('store').createRecord('movie', {
      name,
      description,
      year,
      rating,
      categories,
    });
    yield movie.save();
    this.onSuccess(movie);
  }),
});
