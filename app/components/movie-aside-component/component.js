import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';

export default Component.extend({
  propTypes: {
    movieList: PropTypes.array.isRequired,
    showMovie: PropTypes.func.isRequired,
  },
});
