import DS from 'ember-data';
const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  posterPath: attr('string'),
  year: attr('number'),
  rating: attr(),
  language: attr('string'),
  categories: hasMany('category'),
  movieDbId: attr('number'),
});
