let count=0;
function repeat(operation, num)
{
  // SOLUTION GOES HERE
  if(num<=0)
  {
    return count;
  }
  else
  {
    operation();
    return repeat(operation,--num);
  }
}
function  operation()
{
  count++;
}

//for positive number
console.log("checking for repeat function\t", repeat(operation,4)===4);
count=0;
//for negative number
console.log("checking for repeat function\t", repeat(operation,-4)===0);
count=0;
//for 0
console.log("checking for repeat function\t", repeat(operation,0)===0);

// Do not remove the line below
//module.exports = repeat
