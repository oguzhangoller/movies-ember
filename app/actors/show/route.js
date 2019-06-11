import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Route.extend({
  model(params) {
    const actor_id = params.id;
    return this.get('store').findRecord('actor', actor_id);
  },
});
