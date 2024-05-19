function processArray(inputArray) {
    let index = 0;
    let resultArray = [];
   
    while (index < inputArray.length) {
      if (inputArray[index] % 2 === 0) {
        let square = inputArray[index] ** 2;
        resultArray.push(square);
      } else {
        let tripled = inputArray[index] * 3;
        resultArray.push(tripled);
      }
      index++;
        }
    }