function doubleAll(numbers) {
  return numbers.map(function double(num) {
    return num * 2
  })
    }

console.log("with positive numbers", doubleAll([1,2,3,4]).toString()===[2,4,6,8].toString());
console.log("with positive numbers", doubleAll([-1,-2,3,4]).toString()===[-2,-4,6,8].toString());
console.log("with positive numbers", doubleAll([]).toString()===[].toString());

    //module.exports = doubleAll
