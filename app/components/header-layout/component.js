import Component from '@ember/component';
import { PropTypes } from 'ember-prop-types';
import { action } from 'ember-decorators/object';

export default Component.extend({
  propTypes: {},

  @action
  onClicked() {
    this.get('onClicked')();
  },
});
