
const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "strawberry,strawberry,strawberry,coffee,coffee,coconut"
);



function createObject(str){
 
  // Split the string into an array of strings.
  const strArray = str.split(",");

  // Object with flavors as keys and count as values
  const orderCountObject = {};
  for (i=0; i < strArray.length; i++) {
    if (strArray[i] in orderCountObject){
      orderCountObject[strArray[i]] += 1;
      // orderCountObject.strArray[i] += 1;
    } else {
      orderCountObject[strArray[i]] = 1;
      // orderCountObject.strArray[i] = 1;
    }
  }

  
  return orderCountObject;
}

// call function using userInputString as the argument for function parameter
const result = createObject(userInputString);

console.table(result);

