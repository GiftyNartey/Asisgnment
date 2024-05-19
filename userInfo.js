const { processArray, formateArray } = require('./arraymanipulation');

function createUserProfiles(nameArray, numArray) {
  let userProfileList = [];
  let idCounter = 0;

  function generateId() {
    return ++idCounter;
  }

  const processedNumbers = processArray(numArray);
  const formattedNames = formateArray(processedNumbers, nameArray);

  for (let i = 0; i < formattedNames.length; i++) {
    let userProfile = {
      id: generateId(),
      originalName: nameArray[i],
      modifiedName: formattedNames[i]
    };
    userProfileList.push(userProfile);
  }

  return userProfileList;
}

const nameArray = ["Pizza", "spinach", "Banana", "Kiwi", "bacon","Broccoli"];
const numArray = [71,34, 10, 51, 335, 28];

const profiles = createUserProfiles(nameArray, numArray);
console.log(profiles);