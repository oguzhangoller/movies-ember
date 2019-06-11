import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true,
    },
  },
  model(params) {
    return this.get('store')
      .query('actor', { page: params.page, per_page: 20 })
      .then(results => {
        return {
          actors: results,
          meta: results.get('meta'),
        };
      });
  },

  setupController(controller, { actors, meta }) {
    this._super(controller, actors);
    controller.set('meta', meta);
  },
});
