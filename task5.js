function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {

    return submittedUsers.every(function (submittedUser){
      return goodUsers.some(function (validUser){
        return validUser.id===submittedUser.id;
      });
    });
    // SOLUTION GOES HERE
  };
}

var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

var users=[
  { id: 1 },
  { id: 2}
];

//basecase Testing

console.log("Users are good users\t", checkUsersValid(goodUsers)(users)===true);

users=[];
console.log("With empty users\t", checkUsersValid(goodUsers)(users)===true);

var users=[
  { id: 1 },
  { id: 4}
];

console.log("With empty users\t", checkUsersValid(goodUsers)(users)===false);





//module.exports = checkUsersValid
