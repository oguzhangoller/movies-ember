function languageMapper(input) {
  switch (input) {
    case 'en':
      return 'English';
    case 'ja':
      return 'Japanese';
    case 'zh':
      return 'Chinese';
    case 'hi':
      return 'Hindi';
    case 'ta':
      return 'Tamil(India)';
    case 'ml':
      return 'Malayalam(India)';
    case 'te':
      return 'Telugu(India)';
    case 'id':
      return 'Indonesian';
    case 'nl':
      return 'Dutch';
    case 'pl':
      return 'Polish';
    case 'ru':
      return 'Russian';
    case 'fr':
      return 'French';
    case 'it':
      return 'Italian';
    case 'es':
      return 'Spanish';
    case 'de':
      return 'German';
    case 'ko':
      return 'Korean';
    case 'tr':
      return 'Turkish';
    case 'pt':
      return 'Portuguese';
    case 'tl':
      return 'Filipino';
    case 'fa':
      return 'Persian';
  }
  return input;
}

export default languageMapper;
