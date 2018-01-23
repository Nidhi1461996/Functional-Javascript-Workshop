function bingo(){
  let users = [];
  let count=0;
  for(let i=0; i< 5; i++){
    users[count]=1;
    count++;
    users.push(setTimeout(function(){

      return 1;
    }));
    users.pop();
  }
  return users;
}

console.log(bingo());
