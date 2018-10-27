const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');

describe('make', () => {
  describe('sum', () => {
    it('should return [8, 7, 6, 9]', () => {
      const result = sumOfOther([2, 3, 4, 1]);
      assert.deepStrictEqual(result, [8, 7, 6, 9]);
    });
    it('should return [5, 6, 7, 8]', () => {
      const result = sumOfOther([5, 6, 7, 8]);
      assert.deepStrictEqual(result, [21, 20, 19, 18]);
    });
  });
});
