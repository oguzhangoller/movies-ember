import DS from 'ember-data';
const { attr, belongsTo, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  year: attr('number'),
  rating: attr('decimal2'),
});
