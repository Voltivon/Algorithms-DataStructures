// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// DATE TIMEMATHEMATICSALGORITHMS


function humanReadable (seconds) {
    if(seconds > 359999 || seconds == NaN) return;
    let hours = seconds / 3600;
    let minutes = seconds / 60 % 60;
    let newSeconds = seconds % 60;
    console.log(newSeconds)
    console.log(minutes)
  
    return `${formatDate(hours)}:${formatDate(minutes)}:${formatDate(newSeconds)}`
  }
  
  function formatDate(n){
    let number = Number.parseInt(n);
    return number > 9 ? number : "0" + number;
  }
  
  
  console.log(humanReadable(6003));