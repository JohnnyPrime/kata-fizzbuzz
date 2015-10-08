/*globals require, describe, it, expect, fizzBuzz*/

//'use strict';

var fizzBuzz = require("../fizzbuzz.js");

describe('fizz buzz', function () {
    it('should return 0 given 0', function () {
        var result = fizzBuzz.getResult(0);
        expect(result.toEqual(0));
    });
    
});