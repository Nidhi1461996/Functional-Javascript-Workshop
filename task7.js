
function reduce(arr, fn, initial) {
  if(arr.length===0){
    return initial;
  }
  let num2=arr[0];
  initial = fn(num2,initial);
  arr=arr.slice(1);
  return reduce(arr,fn,initial);

}

function fn(num1,num2){
  //console.log(num1,num2,"......");
  return num1+num2;
}
//base case
console.log("Base Case testing\t", reduce([1,2,3,4,5],fn,1)===16);

//empty array
console.log("testing for empty array\t", reduce([],fn,0)===0);
