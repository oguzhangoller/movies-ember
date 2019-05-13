import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  me: service(),

  model() {
    return this.get('store')
        .adapterFor('movie')
        .createList()
        .then(response => {
          this.get('store').pushPayload(response);
          const movieIds = response.data.map(item => item.id);
          return movieIds.map(id => this.store.peekRecord('movie', id));
    });
  }
});
