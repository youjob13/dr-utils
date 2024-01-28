import assert from 'assert/strict';
import { capitalize, getNonNullableValues } from './index.js';

describe('capitalize', () => {
  it('return capitalized string', () => {
    const actualResult = capitalize('hello');
    assert.strictEqual(actualResult, 'Hello');
  });
});

describe('getNonNullableValues', () => {
  it('return an array without nullable values', () => {
    const array = [1, null, 2, undefined, 3];
    const result = getNonNullableValues(array);
    assert.deepStrictEqual(result, [1, 2, 3]);
  });

  it('return an empty array if all array values are nullable', () => {
    const array = [null, undefined];
    const result = getNonNullableValues(array);
    assert.deepStrictEqual(result.length, 0);
  });
});
