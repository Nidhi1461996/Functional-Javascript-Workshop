function doubleAll(numbers) {
  return numbers.map(function double(num) {
    return num * 2;
  });
}

console.log("with positive numbers\t", doubleAll([1,2,3,4]).toString()===[2,4,6,8].toString());
console.log("with positive numbers\t", doubleAll([-1,-2,3,4]).toString()===[-2,-4,6,8].toString());
console.log("with positive numbers\t", doubleAll([]).toString()===[].toString());
console.log("validation of false condition\t", doubleAll([1,2]).toString()!==[1,2].toString());


//module.exports = doubleAll
