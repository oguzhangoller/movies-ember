import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { action, computed } from 'ember-decorators/object';

export default Component.extend({
  propTypes: {
    movieList: PropTypes.array.isRequired,
    showMovie: PropTypes.func.isRequired,
  },
});
