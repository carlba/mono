import { Temporal } from '@js-temporal/polyfill';

console.log(`✅ Current time in ISO 8601 is ${new Date().toISOString()}`);
console.log(
  `✅ Current time in ISO 8601 using Temporal ${Temporal.Now.plainDateTimeISO().toString()}`
);

console.log(`✅ Current time in epoch ${Temporal.Now.instant().epochMilliseconds}`);

const timeInMexicoCity = Temporal.ZonedDateTime.from('2025-01-30T12:00[America/Mexico_City]');

console.log(
  `✅ At 12:00 in CDMX it is ${timeInMexicoCity.withTimeZone('Europe/Stockholm').toString()}`
);
