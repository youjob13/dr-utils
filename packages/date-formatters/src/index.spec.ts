import assert from 'assert/strict';
import { formatStringDateToTimestamp, formatToDate, formatToTimestamp } from './index.js';

const mockDate = '2024-01-28 04:00';
const mockTimestamp = 1706400000000;

describe('formatToTimestamp', () => {
  it('return timestamp', () => {
    const actualResult = formatToTimestamp(mockDate);
    assert.deepStrictEqual(actualResult, mockTimestamp);
  });
});

describe('formatToDate', () => {
  it('return capitalized localized date in default format', () => {
    const actualResult = formatToDate(1706400000000);
    assert.deepStrictEqual(actualResult, 'Вс 28.01.2024 04:00');
  });

  it('return no capitalized localized date in default format', () => {
    const actualResult = formatToDate(1706400000000, { capitalizeRes: false });
    assert.deepStrictEqual(actualResult, 'вс 28.01.2024 04:00');
  });

  it('return localized date in custom format', () => {
    const actualResult = formatToDate(1706400000000, { template: 'dd DD.MM' });
    assert.deepStrictEqual(actualResult, 'Вс 28.01');
  });
});

describe('formatStringDateToTimestamp', () => {
  it('return timestamp', () => {
    const actualResult = formatStringDateToTimestamp(mockDate);
    assert.deepStrictEqual(actualResult, mockTimestamp);
  });
});
