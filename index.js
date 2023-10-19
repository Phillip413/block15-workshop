
const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "strawberry,strawberry,strawberry,coffee,coffee,coconut"
);


// Split the string into an array of strings.
const stringArray = userInputString.split(",");



// console.log(stringArray);


//creating an Object
const flavorCount = {};



const newArray = [];
let numOfOrders = 0;
// Use loop to iterate through the array of flavors
for(i=0; i<stringArray.length; i++) {




  newArray.push(stringArray[i]);
  console.log(stringArray[i]);

  let str = stringArray[i];
  //add each flavor input in stringArray as a key in flavorCount Object
  flavorCount.str=
  

}

// console.log("Total number of orders is: " + numOfOrders);


function countfrequency(arr, size){
 
  for (i=0; i<stringArray.length; i++) {
    
    for (x=i+1; x<stringArray.length; x++){
      if (arr[i] == arr[x]) {
        flavorCount[x]=true;
        count++;
      }
    }

  }
  return num;
}





// for (const key in order) {
//   // console.log(order(key));
// }


// console.table(order);

// console.table(stringArray);
