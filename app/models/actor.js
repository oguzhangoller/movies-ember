import DS from 'ember-data';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  posterPath: attr('string'),
  birthPlace: attr('string'),
  birthDate: attr(),
  popularity: attr(),

  movies: hasMany('movie'),
});
