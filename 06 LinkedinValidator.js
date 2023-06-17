function validateLinkedInURL(url) {
    var regex = /^https:\/\/www.linkedin.com\/in\/[A-Za-z0-9_-]{5,30}[A-Za-z0-9]$/;
  
    if (regex.test(url)) {
      console.log("The LinkedIn profile URL is valid.");
    } else {
      console.log("The LinkedIn profile URL is not valid.");
    }
  }
  
  // Test the URLs
  validateLinkedInURL("https://www.linkedin.com/in/johndoe123");
  validateLinkedInURL("https://www.linkedin.com/in/mary_smith");
  validateLinkedInURL("https://www.linkedin.com/in/jane_doe-123");
  validateLinkedInURL("https://www.linkedin.com/in/mark");
  validateLinkedInURL("https://www.linkedin.com/in/alex%20smith");
  