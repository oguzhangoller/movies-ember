import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',
  dataType: 'json',

  getRecommendedMovies(movie_id) {
    return this.ajax(`http://localhost:3000/movies/${movie_id}/recommended_movies`);
  },

  getSimilarMovies(movie_id) {
    return this.ajax(`http://localhost:3000/movies/${movie_id}/similar_movies`);
  },
});
