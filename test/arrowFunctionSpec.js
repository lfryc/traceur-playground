import {square} from '../src/arrowFunction.js';

describe('Arrow Functions', function () {

  it('should allow to use arrow function', function () {
    expect(square(2)).toEqual(4);
  });
});