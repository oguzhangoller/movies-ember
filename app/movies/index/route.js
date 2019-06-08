import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true,
    },
  },
  model(params) {
    return this.get('store')
      .query('movie', { page: params.page, per_page: 20 })
      .then(results => {
        return {
          movies: results,
          meta: results.get('meta'),
        };
      });
  },

  setupController(controller, { movies, meta }) {
    this._super(controller, movies);
    controller.set('meta', meta);
  },
});
