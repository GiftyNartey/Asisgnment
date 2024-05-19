function processArray(inputArray) {
    let resultArray = [];
    
    for (let index = 0; index < inputArray.length; index++) {
      if (inputArray[index] % 2 === 0) {
        let square = inputArray[index] ** 2;
        resultArray.push(square);
      } else {
        let tripled = inputArray[index] * 3;
        resultArray.push(tripled);
      }
    }
  
    return resultArray;
  }
  
  function formateArray(modifiedArray, stringArray) {
    let formattedStrings = [];
    let minLength = Math.min(modifiedArray.length, stringArray.length); 
  
    for (let j = 0; j < minLength; j++) {
      if (modifiedArray[j] % 2 !== 0) {
        formattedStrings.push(stringArray[j].toLowerCase());
      } else {
        formattedStrings.push(stringArray[j].toUpperCase());
      }
    }
  
    return formattedStrings;
  }
  
  module.exports = { processArray, formateArray };