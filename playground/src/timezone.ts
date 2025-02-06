import { Temporal } from '@js-temporal/polyfill';

// https://tc39.es/proposal-temporal/docs/cookbook.html

console.log(`✅ Current time in ISO 8601 is ${new Date().toISOString()}`);
console.log(
  `✅ Current time in ISO 8601 using Temporal ${Temporal.Now.plainDateTimeISO().toString()}`
);

console.log(`✅ Current time in epoch ${Temporal.Now.instant().epochMilliseconds}`);

const timeInMexicoCity = Temporal.ZonedDateTime.from('2025-01-30T09:00[Africa/Dar_es_Salaam]');

console.log(
  `✅ At 12:00 in CDMX it is ${timeInMexicoCity.withTimeZone('America/Mexico_City').toString()}`
);
