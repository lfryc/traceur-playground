import {Anno, MyClass} from '../src/annotations.js';

describe('Annotations', function () {

  it('should have annotation', function () {
    let instance = new MyClass();
    expect(instance.constructor).toBe(MyClass);
    expect(instance.constructor.annotations).toBeDefined();
    expect(instance.constructor.annotations.length).toEqual(1);
    expect(instance.constructor.annotations[0] instanceof Anno).toBeTruthy();
  });
});