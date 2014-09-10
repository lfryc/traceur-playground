import {asyncValue} from '../src/async.js';

describe('Async', function () {

    it('run async', function (done) {
        (async function() {
            var value = await asyncValue(42).catch(console.error.bind(console));
            expect(value).toEqual(42);
            done();
        })();
    });
});