const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
  return function named() {};
}
function returnsAnAnonymousFunction() {
    return function() {};
    }
    function receivesAFunction(callback) {
        callback();
        }
        function returnsANamedFunction() {
        return function named() {};
        }
        function returnsAnAnonymousFunction() {
        return function() {};
        }