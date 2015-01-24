jest.dontMock('../main');

describe('main', function() {
  it('added two numbers together', function () {
    var sum = require('../main');
    expect(sum(1,2)).toBe(3);
  });
});
