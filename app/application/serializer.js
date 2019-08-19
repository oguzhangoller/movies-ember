import { underscore } from '@ember/string';
import DS from 'ember-data';
import camelizeKeys from 'movies-ember/utils/camelize-keys';
import languageMapper from 'movies-ember/utils/language-mapper';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  },

  keyForRelationship(key) {
    return underscore(key);
  },

  //match language codes with language names
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.data.attributes && payload.data.attributes.language) {
      payload.data.attributes.language = languageMapper(payload.data.attributes.language);
    }
    if (Array.isArray(payload.data)) {
      payload.data.forEach(function(element, index, theArray) {
        theArray[index].attributes.language = languageMapper(element.attributes.language);
      });
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  //camelize totalPages
  normalizeArrayResponse() {
    let normalizedDocument = this._super(...arguments);
    // Customize document meta
    normalizedDocument.meta = camelizeKeys(normalizedDocument.meta);

    return normalizedDocument;
  },
});
