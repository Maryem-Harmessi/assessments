/**
 * Complete the function `makeIncrementer`.
 *
 * It accepts two number as its only argument, `num` and returns a function that takes a step as an argument,
 * when invoked, should increment `num` by the given step and return the new `num` value.
 *
 * var incrementer = makeIncrementer(4);
 *
 * incrementer(1) // -> 5
 * incrementer(5) // -> 10
 * incrementer(2) // -> 12
 */

var makeIncrementer = function (num) {
  return function(step){
    num=num+step
    return num
  }
};
