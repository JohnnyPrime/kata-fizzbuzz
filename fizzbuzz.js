/*globals exports*/

var fizzBuzz = {

    getResult: function (nInput) {
        if (nInput % 3 === 0 && nInput !== 0){
            return "fizz";
        }
        return nInput;
    }
};

exports.fizzBuzz = fizzBuzz;
