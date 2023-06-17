// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  
  // Delayed random number generation with progress indication
  function delayedRandomNumber(delay) {
    var remainingTime = delay;
    var intervalId = setInterval(function() {
      console.log("Time remaining:", remainingTime, "seconds");
      remainingTime--;
      if (remainingTime === 0) {
        clearInterval(intervalId);
        var randomNum = generateRandomNumber();
        console.log("Random number:", randomNum);
      }
    }, 1000);
  }
  
  // Example usage with a delay of 3 seconds
  var delay = 3;
  delayedRandomNumber(delay);
  