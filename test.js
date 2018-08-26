var round = require('./');
var expect = require('expect');

describe('fixed-round', function() {
  it('1. fixed > 0', function() {
    expect(round(125.34567, 1)).toBe(125.3);
    expect(round(125.34567, 2)).toBe(125.35);
    expect(round(125.34567, 3)).toBe(125.346);
    expect(round(125.34567, 4)).toBe(125.3457);
    expect(round(125.34567, 5)).toBe(125.34567);
    expect(round(125.34567, 6)).toBe(125.34567);
  });

  it('2. fixed = 0', function() {
    expect(round(125.6, 0)).toBe(126);
    expect(round(125.4, 0)).toBe(125);
    expect(round(125.6, null)).toBe(126);
    expect(round(125.6, '')).toBe(126);
    expect(round(125.6)).toBe(126);
    expect(round(125.4, null)).toBe(125);
    expect(round(125.6, undefined)).toBe(126);
    expect(round(125.4, undefined)).toBe(125);
    expect(round(125.6)).toBe(126);
    expect(round(125.4)).toBe(125);
  });

  it('3. fixed < 0', function() {
    expect(round(125.34567, -1)).toBe(130);
    expect(round(125.34567, -2)).toBe(100);
  });

  it('4. exception', function() {
    expect(isNaN(round('hello', 2))).toBe(true);
    expect(round(123.456, '2')).toBe(123.46);
    expect(round(123.456, -2)).toBe(100);
    expect(round(123.456, -1)).toBe(120);
  });

  it('5. random', function() {
    for (var i = 0; i < 10000; i += 1) {
      var r = Math.random();
      expect((round(r, 2) + '').length).toBeLessThanOrEqualTo(4);
    }
  });
});
