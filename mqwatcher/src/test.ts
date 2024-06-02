import tseslint from 'typescript-eslint';
import eslint = require('@eslint/js');

const tseslintRules = tseslint.configs.recommended
  .map(ruleset => ruleset.rules)
  .filter(Boolean)
  .reduce(
    (acc, value) => {
      return { ...acc, ...value };
    },
    {} as (typeof tseslint.configs.recommended)[0]['rules']
  );

const test3 = { ...tseslintRules, ...eslint.configs.recommended.rules };

console.log(test3);
