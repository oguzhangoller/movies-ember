import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://mowie-backend.herokuapp.com',
  dataType: 'json',
});
