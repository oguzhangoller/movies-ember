import Controller from '@ember/controller';
import { action, computed } from 'ember-decorators/object';

export default Controller.extend({
  year: null,

  @action
  onClicked() {
    this.transitionToRoute('movies/index');
    debugger;
  },
});
