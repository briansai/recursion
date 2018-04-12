// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // create empty array for storing the elements
  var listOfElements = [];
  // create function to find elements that have class name
  function findElementsThatHaveClassName(element){
    //if the classlist is defined in the element and it contains the classname, store the element into listOfElements
    if(element.classList){
      if(element.classList.contains(className)){
        listOfElements.push(element);
      }
    }
    // if it contains a childnode that's defined, loop through and recursively look for childnode	  
    if(element.childNodes){
      for(var x = 0; x < element.childNodes.length; x++){      
        findElementsThatHaveClassName(element.childNodes[x]);
      };
    }
  }
  
  // recursively invoke the function until it reaches the end	
  findElementsThatHaveClassName(document.body);
  
  return listOfElements;

};
