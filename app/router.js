import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('container', { path: '/', resetNamespace: true }, function() {
    this.route('movies/index', { path: '/movies', resetNamespace: true });
    this.route('movies/new', { path: '/movies/new', resetNamespace: true });
    this.route('movies/show', { path: '/movies/:id', resetNamespace: true });

    this.route('actors/index', { path: '/actors', resetNamespace: true });
    this.route('actors/new', { path: '/actors/new', resetNamespace: true });
    this.route('actors/show', { path: '/actors/:id', resetNamespace: true });
  });
});

export default Router;
