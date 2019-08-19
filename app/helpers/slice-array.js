import { helper } from '@ember/component/helper';

export function sliceArray([array, index]) {
  return array.slice(0, index);
}

export default helper(sliceArray);
