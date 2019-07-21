import { helper } from '@ember/component/helper';

export function trimDescription(param) {
  let description = param.firstObject;
  let trimmed = description.substr(0, 200);
  let endOfSentenceIndex;

  if (trimmed.lastIndexOf('.') != -1) {
    endOfSentenceIndex = trimmed.lastIndexOf('.');
  } else if (description.indexOf('.') != -1) {
    endOfSentenceIndex = description.indexOf('.');
  } else {
    endOfSentenceIndex = description.length;
  }

  //re-trim if we are in the middle of a word
  return trimmed.substr(0, Math.min(trimmed.length, endOfSentenceIndex));
}

export default helper(trimDescription);
