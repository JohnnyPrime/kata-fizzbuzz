/*globals exports*/

var fizzBuzz = {

    getResult: function (nInput) {
        if (nInput % 15 === 0 && nInput !== 0) {
            return "fizzbuzz";
        }

        if (nInput % 3 === 0 && nInput !== 0) {
            return "fizz";
        }

        if (nInput % 5 === 0 && nInput !== 0) {
            return "buzz";
        }

        return nInput;
    }
};

exports.fizzBuzz = fizzBuzz;