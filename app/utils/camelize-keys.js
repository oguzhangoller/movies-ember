import { isArray } from '@ember/array';

let camelizeKeys;

function camelizeArray(array) {
  return array.map(item => camelizeKeys(item));
}

function camelizeProperties(input) {
  let camelized = {};
  for (let key in input) {
    if (input.hasOwnProperty(key)) {
      let camelizedName = key.camelize();
      let value = input[key];
      if (value === null) {
        camelized[camelizedName] = null;
      } else if (typeof value === 'object') {
        camelized[camelizedName] = camelizeKeys(value);
      } else {
        camelized[camelizedName] = value;
      }
    }
  }

  return camelized;
}

camelizeKeys = function(input) {
  if (isArray(input)) {
    return camelizeArray(input);
  } else if (typeof input === 'object') {
    return camelizeProperties(input);
  }

  return input;
};

export default camelizeKeys;
