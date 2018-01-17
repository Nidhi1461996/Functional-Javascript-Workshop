let cnt=0;
function duckCount(obj1,obj2) {
  arguments = Array.prototype.slice.call(arguments);

  arguments.filter(function count(obj){
    if(obj.hasOwnProperty("quack")){
      cnt++;
      return true;
    }
    else{
      return false;
    }

  });
  return cnt;
}

let notDuck = Object.create({quack: true});
let duck = {quack: true};
let empty={};
let oneMoreDuck={quack: true};

console.log("base case testing\t",duckCount(notDuck,duck,empty)===1);

cnt=0;
console.log("base case testing with two quacks\t",duckCount(notDuck,duck,empty,oneMoreDuck)===2);
