function validateURL(url) {
    var regex = /^(http:\/\/|https:\/\/)[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[A-Za-z]+$/;
  
    if (regex.test(url)) {
      console.log("The URL is valid.");
    } else {
      console.log("The URL is not valid.");
    }
  }
  
  // Test the URLs
  validateURL("http://www.example.com");
  validateURL("https://www.example.com.");
  validateURL("http://example.com");
  validateURL("https..example.com");
  validateURL("http:///example//");
  validateURL("https://example");
  