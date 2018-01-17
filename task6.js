function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce(function(count, word) {
    if(count[word]){
      count[word]+=1;
    }
    else {
      count[word]=1;
    }
    return count;
  },{});

}


console.log("Checking for the base case\t",countWords(["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"]).toString()==={ Apple: 2, Banana: 1, Durian: 3 }.toString());
console.log("Checking for empty list\t",countWords([]).toString()==={}.toString());
//module.exports = countWords;
