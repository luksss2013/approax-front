const NextI18Next = require('next-i18next').default;
const path = require('path');

module.exports = new NextI18Next({
  defaultLanguage: 'pt',
  otherLanguages: ['en'],
  localeSubpaths: {
    pt: 'pt',
    en: 'en'
  },
  localePath: path.resolve('./public/static/locales')
});