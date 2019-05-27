import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Route.extend({

  model(params) {
    const movie_id = params.id;
    return this.get('store').findRecord('movie',movie_id);
  },
});
