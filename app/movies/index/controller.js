import Controller from '@ember/controller';
import { computed } from 'ember-decorators/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  movies: alias('model'),
});
