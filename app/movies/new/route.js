import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.set(
      'categories',
      this.get('store').findAll('category')
    );
  },
});
