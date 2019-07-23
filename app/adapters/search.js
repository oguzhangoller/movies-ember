import DS from 'ember-data';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend({
  ajax: service(),

  getResult(searchString) {
    return this.get('ajax').request('https://mowie-backend.herokuapp.com/search', {
      method: 'GET',
      data: {
        query: searchString,
      },
    });
  },
});
