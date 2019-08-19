import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { action } from 'ember-decorators/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  propTypes: {
    placeholder: PropTypes.string,
    results: PropTypes.EmberObject,
    showResults: PropTypes.any,
    searchAction: PropTypes.any,
  },
  query: null,

  @action
  clear() {
    this.set('showResults', false);
    this.set('query', null);
  },

  @action
  search() {
    this.get('searchAction')(this.get('query'));
  },
});
