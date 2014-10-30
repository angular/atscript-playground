import {Something} from '../src/something';

describe('something', function() {
  var something;

  beforeEach(function() {
    something = new Something();
  });

  it('should work', function() {
    expect(something.sum(1, 2)).toBe(3);
  });

  xit('should fail', function() {
    // See the stack traces with source maps...
    something.sum(1, 'invalid');
  });
});
