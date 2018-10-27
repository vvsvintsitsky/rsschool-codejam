const assert = require('assert');
const make = require('../src/make');

describe('make', () => {
  describe('sum', () => {
    it('should return 777', () => {
      function sum(a, b) {
        return a + b;
      }
      const result = make(15)(34, 21, 666)(41)(sum);
      assert.equal(result, 777);
    });
  });
});
