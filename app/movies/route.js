import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  me: service(),

  model() {
    if (this.get('me.currentParasutCompany.companyMatching')) {
      return this.get('store').query('tax-period', {});
    } else {
      return this.get('store')
        .adapterFor('tax-period')
        .createList()
        .then(response => {
          this.get('store').pushPayload(response);
          const taxPeriodIds = response.data.map(item => item.id);
          return taxPeriodIds.map(id => this.store.peekRecord('tax-period', id));
        });
    }
  },
});
