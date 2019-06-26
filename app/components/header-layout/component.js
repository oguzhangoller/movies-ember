import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { action } from 'ember-decorators/object';

export default Component.extend({
  propTypes: {
    goToActors: PropTypes.func.isRequired,
    goToMovies: PropTypes.func.isRequired,
  },

  @action
  goToActors() {
    this.get('goToActors')();
  },

  @action
  goToMovies() {
    this.get('goToMovies')();
  },
});
