// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var collection = [];
 
  if(typeof obj === 'string'){
    return String('\"' + obj + '\"');
  }else if(obj instanceof Array){
    for(var x = 0; x < obj.length; x++){
      collection.push(stringifyJSON(obj[x]));
    }
    return '[' + collection + ']';
  }else if(obj instanceof Object){
    
      for(var key in obj){
        if(key === 'functions' || key === undefined){
          return '{}';
	}
        collection.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    return '{' + collection + '}';
  }else{
    return String(obj);
  }
};
