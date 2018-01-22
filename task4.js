function getShortMessages(arrayMessages) {
  let output = arrayMessages.filter(function(obj) {
    if(obj.message.length<50)
      return obj;
  });
  return output.map( function(element) {
    return element.message;
  });


}


let arrayObj = [ {message: "hello there!"},
  { message: "Whats up" },
  { message: "dfghjkfyghouxhusxhusxuosbsu xbsuxbu qwertyuiopasdfghjkl    jkokzijiohxousxhugxugwux"}
];


console.log("Testing the base case :\t", getShortMessages(arrayObj).toString()===[ "hello there!", "Whats up" ].toString());

//with empty object
arrayObj=[];
console.log("Testing with empty array :\t", getShortMessages(arrayObj).toString()===[].toString());

//check for the return type
console.log("Testing the base case :", typeof getShortMessages(arrayObj)==="object");
