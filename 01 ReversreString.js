// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Delayed string reversal
  function delayedReverseString(input) {
    setTimeout(function() {
      var reversedString = reverseString(input);
      console.log(reversedString);
    }, 2000);
  }
  
  // Example usage
  var input = "Hello, World!, True";
  delayedReverseString(input);
  