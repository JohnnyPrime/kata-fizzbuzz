/*globals exports*/

var fizzBuzz = function (nInput) {
    var list = '';

    for (var i = 0; i < nInput; i++) {

        if (i === 0) {
            list = list.concat("0");
        } else if (i % 15 === 0) {
            list = list.concat(", fizzbuzz");
            //          return "fizzbuzz";
        } else if (i % 3 === 0) {
            list = list.concat(", fizz");
            //          return "fizz";
        } else if (i % 5 === 0) {
            list = list.concat(", buzz");
            //           return "buzz";
        } else {
            list = list.concat(", " + i);
            //          return i;
        }

    }
    console.log(list);
};

fizzBuzz(30);


//exports.fizzBuzz = fizzBuzz;