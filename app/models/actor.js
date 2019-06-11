import DS from 'ember-data';
const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  posterPath: attr('string'),
  popularity: attr(),
});
