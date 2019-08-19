import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { action } from 'ember-decorators/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  propTypes: {
    placeholder: PropTypes.string,
    // results: PropTypes.EmberObject,
  },

  searchString: null,
  query: null,
  results: null,
  showResults: false,
  placeholder: 'Search movies or actors',

  @action
  search(value) {
    if (!value) { 
      this.set('showResults', false);
    } else {
      this.set('showResults', true);
    }
    const adapter = this.store.adapterFor('search');
    adapter.getResult(value).then(response => {
      this.get('store').pushPayload(response.movies);
      const movieIds = response.movies.data.map(item => item.id);
      const movieResults = movieIds.map(id => this.store.peekRecord('movie', id));
      this.set('results', movieResults);
    });
  },
});
