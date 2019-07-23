import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://mowie-backend.herokuapp.com',
  dataType: 'json',

  getRecommendedMovies(movie_id) {
    return this.ajax(
      `https://mowie-backend.herokuapp.com/movies/${movie_id}/recommended_movies`
    );
  },

  getSimilarMovies(movie_id) {
    return this.ajax(
      `https://mowie-backend.herokuapp.com/movies/${movie_id}/similar_movies`
    );
  },
});
