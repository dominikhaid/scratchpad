export const dateStd = dateStr =>
  new Date(dateStr)
    .toLocaleString('de-DE', {timeZone: 'GMT'})
    .replace(/,.*$/, '');

export const dateDiff = dateStr =>
  Date.parse(dateStr) - Date.now() > -630000000;
