/*
Inventory Update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1).
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.

*/

// function updateInventory(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i][1] === arr2[j][1]) {
//         arr1[i][0] += arr2[j][0];
//         break;
//       }
//     }
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     let found = false;
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr2[i][1] === arr1[j][1]) {
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       arr1.push(arr2[i]);
//     }
//   }
//   arr1.sort((a, b) => a[1].localeCompare(b[1]));

//   return arr1;
// }

// Example inventory lists


// Solution 2

function updateInventory(currentInventory, newInventory){
  
    for(let newItem of newInventory){
      let found = false;
      for(let oldItem of currentInventory){
        if(newItem[1] === oldItem[1]){
          oldItem[0] += oldItem[1];
          found = true;
          break;
        }
      }

      if(!found) currentInventory.push([...newItem]);

    }

    return currentInventory.sort(
      (a, b) => {
        if(a[1] < b[2]) return -1;
        if(a[1] > b[2]) return 1;
        return 0;
      }
    )

}


var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
