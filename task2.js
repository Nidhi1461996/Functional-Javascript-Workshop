let count=0;
function repeat(operation, num)
  {
      // SOLUTION GOES HERE
      if(num===0)
      {
        return count;
      }
      else
      {
        operation();
        return repeat(operation,--num)
      }
  }
function  operation()
{
  count++
}

console.log("checking for repeat function\t", repeat(operation,4)===4);

    // Do not remove the line below
    //module.exports = repeat
