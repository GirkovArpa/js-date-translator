'use strict';

const getNames = function (locale = 'en', which = 'month', length = 'long') {
  return Array.from({ length: 12 }, (_, i) => {
    const date = new Date(0, i, 1);
    const month = date.toLocaleString(locale, { [which]: length });
    return month;
  });
}

const buildDict = function (from = 'en', to = 'es') {
  const list = {
    monthsLongFrom: getNames(from, 'month', 'long').map((s) => s.toLowerCase()),
    monthsShortFrom: getNames(from, 'month', 'short').map((s) => s.toLowerCase()),
    weekdaysLongFrom: getNames(from, 'weekday', 'long').map((s) => s.toLowerCase()),
    weekdaysShortFrom: getNames(from, 'weekday', 'short').map((s) => s.toLowerCase()),

    monthsLongTo: getNames(to, 'month', 'long').map((s) => s.toLowerCase()),
    monthsShortTo: getNames(to, 'month', 'short').map((s) => s.toLowerCase()),
    weekdaysLongTo: getNames(to, 'weekday', 'long').map((s) => s.toLowerCase()),
    weekdaysShortTo: getNames(to, 'weekday', 'short').map((s) => s.toLowerCase()),
  };

  const dictionize = (arrayName) => {
    const entries = list[`${arrayName}From`].map((k, i) => ([k, list[`${arrayName}To`][i]]));
    console.log(entries);
    return Object.fromEntries(entries);
  };

  return {
    months: {
      short: dictionize('monthsShort'),
      long: dictionize('monthsLong')
    },
    weekdays: {
      short: dictionize('weekdaysShort'),
      long: dictionize('weekdaysLong')
    }
  };
}

console.log(buildDict('en', 'pt-BR'));

