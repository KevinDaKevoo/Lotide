const middle = require('../middle');
const assert = require('chai').assert;


describe("middle", () => {
  it("returns [1, 2, 5, 6] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), ([1, 2, 5, 6]));
  });
});