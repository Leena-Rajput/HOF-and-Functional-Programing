// Store's inventory object
var inventory = {
    item1: 10,    // Price in USD
    item2: 20,
    item3: 15.5,
    item4: 8.75
  };
  
  // Convert prices from USD to INR using map and create a new object
  var exchangeRate = 80;
  
  var convertedInventory = {};
  
  Object.keys(inventory).map(function(item) {
    var priceUSD = inventory[item];
    var priceINR = priceUSD * exchangeRate;
    convertedInventory[item] = priceINR;
  });
  
  // Output the converted inventory
  console.log(convertedInventory);
  