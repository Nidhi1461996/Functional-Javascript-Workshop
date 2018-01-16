function upperCaser(input)
{
  return input.toUpperCase();
}
//module.exports = upperCaser
console.log("to convert a string with only alphabets to uppercase\t",upperCaser("this is a test case")==="THIS IS A TEST CASE");
console.log("to covert a string to upper case with numbers\t",upperCaser("this is with numbers 1234")==="THIS IS WITH NUMBERS 1234");
console.log("to covert a string to upper case with special characters\t",upperCaser("this is with numbers ,.;")==="THIS IS WITH NUMBERS ,.;");
