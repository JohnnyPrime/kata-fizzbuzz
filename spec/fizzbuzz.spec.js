/*globals require, describe, it, expect, fizzBuzz*/

'use strict';

var fizzBuzz = require("../fizzbuzz.js").fizzBuzz;

describe('fizz buzz test', function () {
    it('should return 0 given 0', function () {
        expect(fizzBuzz.getResult(0)).toEqual(0);
    });

    it('should return 1 given 1', function () {
        expect(fizzBuzz.getResult(1)).toEqual(1);
    });

    it('should return 2 given 2', function () {
        expect(fizzBuzz.getResult(2)).toEqual(2);
    });

    it('should return fizz given 3', function () {
        expect(fizzBuzz.getResult(3)).toEqual("fizz");
    });

    it('should return 4 given 4', function () {
        expect(fizzBuzz.getResult(4)).toEqual(4);
    });

    it('should return buzz given 5', function () {
        expect(fizzBuzz.getResult(5)).toEqual("buzz");
    });

    it('should return fizzbuzz given 15', function () {
        expect(fizzBuzz.getResult(15)).toEqual("fizzbuzz");
    });

    it('should return 19 given 19', function () {
        expect(fizzBuzz.getResult(19)).toEqual(19);
    });

    it('should return fizzbuzz given 30', function () {
        expect(fizzBuzz.getResult(30)).toEqual("fizzbuzz");
    });

});