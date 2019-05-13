import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  createList() {
    return this.ajax(`${this.buildURL('tax-period')}/create_list`);
  },
});
