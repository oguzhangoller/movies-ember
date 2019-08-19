import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const actor_id = params.id;
    return this.get('store').findRecord('actor', actor_id, { include: 'movies' });
  },
});
