import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('container', { path: '/', resetNamespace: true }, function() {
    this.route('movies/index', { path: '/movies', resetNamespace: true });
  })      
});

export default Router;
