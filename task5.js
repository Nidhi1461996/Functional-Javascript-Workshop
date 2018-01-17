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




//module.exports = checkUsersValid
