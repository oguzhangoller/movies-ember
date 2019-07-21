import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import camelizeKeys from 'movies-ember/utils/camelize-keys';

export default Route.extend({
  model(params) {
    const movie_id = params.id;
    return this.store.findRecord('movie', movie_id, { include: 'categories, actors' });
  },

  setupController(controller, model) {
    this._super(...arguments);

    const adapter = this.store.adapterFor('movie');
    adapter.getRecommendedMovies(model.id).then(response => {
      const formattedResponse = camelizeKeys(response);
      controller.set('recommendedMoviesList', this.store.push(formattedResponse));
    });

    adapter.getSimilarMovies(model.id).then(response => {
      const formattedResponse = camelizeKeys(response);
      controller.set('similarMoviesList', this.store.push(formattedResponse));
    });
  },
});
