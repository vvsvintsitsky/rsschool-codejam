const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');

describe('make', () => {
  describe('sum', () => {
    it('should return [8, 7, 6, 9]', () => {
      const result = sumOfOther([2, 3, 4, 1]);
      assert.deepStrictEqual(result, [8, 7, 6, 9]);
    });
  });
});
