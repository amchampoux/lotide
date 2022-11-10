const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns false for: Lighthouse Labs, Bootcamp", () => {
    assert.strictEqual("Lighthouse Labs", "Bootcamp");
  });
  it("returns true for: Bootcamp, Bootcamp", () => {
    assert.strictEqual("Bootcamp", "Bootcamp");
  });
  it("returns false for: 1, 4", () => {
    assert.strictEqual(1,4);
  });
  it("returns false for: 1, 4", () => {
    const assert = assertEqual(1, 4);
    assert.isFalse(assert);
  });
  it("returns true for: 1, 1", () => {
    assert.strictEqual(1,1);
  });
});





// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 4);