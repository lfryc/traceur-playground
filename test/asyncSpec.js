import {asyncValue} from '../src/async.js';

describe('Async', function () {

    it('should add', function () {
        var done = false;
        runs(function() {
            (async function() {
                var value = await asyncValue(42).catch(console.error.bind(console));
                expect(value).toEqual(42);
                done = true;
            })();
        });
        waitsFor(function() {
            return done;
        });
    });
});