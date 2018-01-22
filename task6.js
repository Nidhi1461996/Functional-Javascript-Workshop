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


console.log("Checking for the base case\t",JSON.stringify(countWords(["Apple", "Banana", "Apple", "Durian", "Durian", "Durian"]))===JSON.stringify({ Apple: 2, Banana: 1, Durian: 3 }));
console.log("Checking for empty list\t",JSON.stringify(countWords([]))===JSON.stringify({}));
console.log("Checking for list with empty string\t",JSON.stringify(countWords(["Apple", "Banana", "Apple", "", "", "Durian"]))===JSON.stringify({"Apple":2,"Banana":1,"":2,"Durian":1}));
console.log("Checking for list with only one instance of each string\t",JSON.stringify(countWords(["Banana", "Apple","Durian"]))===JSON.stringify({"Banana":1,"Apple":1,"Durian":1}));
//module.exports = countWords;
//module.exports = countWords;
